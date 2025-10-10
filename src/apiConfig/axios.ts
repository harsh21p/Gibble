/* eslint-disable no-unsafe-optional-chaining */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { keys } from "../constants/async-storage-keys";
import { Alert } from "react-native";
import {
  getStorageItem,
  removeItem,
  setItem,
} from "./../hooks/use-async-storage";
import Toast from "react-native-simple-toast";
import axiosUtils from "../utils/axiosUtils";

axios.defaults.headers.post["Content-Type"] = "application/json";

const config: AxiosRequestConfig = {
  timeout: 2000,
  headers: {
    source: "mobile",
  },
};

const instance = axios.create(config);

instance.interceptors.request.use(
  async (config) => {
    const envBase = await getStorageItem(keys.savedEnv);
    config.baseURL = envBase.baseUrl;
    return config;
  },
  (error) => Promise.reject(error)
);

const requestInterceptorId: number = instance.interceptors.request.use(
  (configs: AxiosRequestConfig) => configs,
  (error: any) => Promise.reject(error)
);

export interface AxiosProps {
  type: any;
  url: any;
  params?: any;
  headers?: any;
  transformRequest?: any;
}

/** function that returns an axios call */
export const requestApi = ({
  type,
  url,
  params,
  headers,
  transformRequest,
}: AxiosProps): Promise<AxiosResponse> => {
  const SessionExpired = async () => {
    Toast.show("Your session has expired. Kindly login again.", Toast.LONG);
    await removeItem(keys.errorDisplayed);
    removeItem(keys.userLoginData);
  };

  instance.interceptors.request.eject(requestInterceptorId);

  instance.interceptors.request.use(
    async (configs: AxiosRequestConfig) => {
      var baseulr: string;
      const userData = await getStorageItem(keys.userLoginData);
      const envBase = axiosUtils.getBaseUrl().then((res) => {
        baseulr = res;
      });

      if (
        userData?.accessToken &&
        baseulr === configs.baseURL &&
        !url.includes("/data/patient") &&
        !url.includes("?category_names")
      ) {
     
        configs = {
          ...configs,
          baseURL: envBase,
          headers: {
            ...configs.headers,
            Authorization: `Bearer ${userData?.accessToken}`
          },
        };
      } else {
        configs = {
          ...configs,
          baseURL: envBase,
          headers: {
            ...configs.headers,
          },
        };
      }

      return Promise.resolve(configs);

    },
    (error: any) => Promise.reject(error)
  );
  instance.interceptors.request.eject(requestInterceptorId);

  instance.interceptors.request.use(
    (configs: AxiosRequestConfig) => Promise.resolve(configs),
    (error: any) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => Promise.resolve(response),
    async (error: any) => {
      const { status } = error?.response;
      const userData = await getStorageItem(keys.userLoginData);
      const errorDisplayed = await getStorageItem(keys.errorDisplayed);

      const originalConfig = error.config;
      if (error.response) {
        // Access Token was expired
        if (status === 401) {
          if (userData?.refreshToken) {
            try {
              const preApiHitConst = {
                accessToken: undefined,
                refreshToken: userData?.refreshToken || "",
        
              };
              await setItem(keys.userLoginData, preApiHitConst);
              const envBase = axiosUtils.getBaseUrl();

              const response = await instance.get(
                `${envBase}auth/refreshToken/${userData?.refreshToken}`
              );
              
              const { data } = response;
              if (data) {
                const userDetails = {
                  accessToken: data?.data?.accessToken || "",
                  refreshToken: userData?.refreshToken || "",
                };

                await setItem(keys.userLoginData, userDetails);

                error.response.config.headers.Authorization =
                  data?.data?.accessToken;
                return instance(originalConfig);
              } else {
                if (!errorDisplayed) {
                  await setItem(keys.errorDisplayed, true);
                  SessionExpired();
                }
              }
            } catch (error) {
              if (!errorDisplayed) {
                await setItem(keys.errorDisplayed, true);
                SessionExpired();
              }
            }
          } else {
            console.log("error of refresh token");
          }
        } else if (status === 408) {
          if (!errorDisplayed) {
            console.log("status 408", status, errorDisplayed);
            await setItem(keys.errorDisplayed, true);
            SessionExpired();
          }
        } else if (status >= 500) {
          if (!errorDisplayed) {
            await setItem(keys.errorDisplayed, true);
            Alert.alert(
              "Something Went Wrong",
              "We couldn't reach to our servers. Please try again later",
              [
                {
                  text: "OK",
                },
              ],
              {
                cancelable: false,
              }
            );
          }
        }
      }
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use((configs: AxiosRequestConfig) => configs);
  instance.interceptors.request.use((configs: AxiosRequestConfig) =>
    Promise.resolve(configs)
  );

  const responseInterceptorId: number = axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => Promise.reject(error)
  );

  axios.interceptors.response.eject(responseInterceptorId);

  axios.interceptors.response.use(
    (response: AxiosResponse) => Promise.resolve(response),
    (error: any) => Promise.reject(error)
  );

  axios.interceptors.response.use((response: AxiosResponse) => response);
  axios.interceptors.response.use((response: AxiosResponse) =>
    Promise.resolve(response)
  );

  return instance.request({
    method: type,
    url: url,
    data: params,
    headers: headers,
    transformRequest: transformRequest,
  });
};

export default instance;
