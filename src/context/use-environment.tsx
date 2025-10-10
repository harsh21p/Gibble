/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { keys } from "../constants/async-storage-keys";
import {
  getStorageItem,
  removeItem,
  setItem,
} from "../hooks/use-async-storage";

interface Props {
  children: React.ReactChild | React.ReactChild[] | JSX.Element;
}

export enum Envs {
  DEV = "DEV",
  QA = "QA",
  UAT = "UAT",
  DEMO = "DEMO",
  PROD = "PROD",
}

export const DEFAULT_ENVIRONMENT = Envs.DEV;

export const BaseURL = {
  DEV: {
    envName: Envs.DEV,
    baseUrl: "", // Leave initially empty, to be fetched dynamically
  },
  QA: {
    envName: Envs.QA,
    baseUrl: "https://fakestoreapi.com",
  },
  UAT: {
    envName: Envs.UAT,
    baseUrl: "https://fakestoreapi.com",
  },
  DEMO: {
    envName: Envs.DEMO,
    baseUrl: "https://fakestoreapi.com",
  },
  PROD: {
    envName: Envs.PROD,
    baseUrl: "https://fakestoreapi.com",
  },
};

interface EnvManager {
  currentEnv: any | null;
  updateEnv: (arg0: Envs) => void;
  resetEnv: () => void;
}

export const EnvironmentContext = React.createContext<EnvManager>({
  currentEnv: BaseURL[DEFAULT_ENVIRONMENT],
  updateEnv: (): void => {},
  resetEnv: (): void => {},
});

export const useEnvironmentContext = (): EnvManager =>
  React.useContext(EnvironmentContext);


const useEnvironmentProvider = ({ children }: Props): JSX.Element => {
  const [currentEnv, setCurrentEnv] = useState(BaseURL[DEFAULT_ENVIRONMENT]);


  const fetchDynamicDevUrl = async () => {
    try {
      const response = await fetch(
        `https://dentalbuddy-28bb3-default-rtdb.firebaseio.com/ngrok-url.json`,
      );
      const url = await response.text();
      return url.slice(1, -1).trim();
    } catch (error) {
      console.error("Failed to fetch DEV URL:", error);
      return "";
    }
  };

  const _getAsyncStorageData = async () => {
    const fetchedDevUrl = await fetchDynamicDevUrl();
    BaseURL.DEV.baseUrl = fetchedDevUrl + "/api";
   
    setItem(keys.savedEnv, BaseURL[DEFAULT_ENVIRONMENT]);
  };

  useEffect(() => {
    _getAsyncStorageData();
  }, []);

  const updateEnv = useCallback((envName: Envs) => {
    setCurrentEnv(BaseURL[envName]);
    removeItem(keys.savedEnv);
    setItem(keys.savedEnv, BaseURL[envName]);
  }, []);

  const resetEnv = useCallback(() => {
    removeItem(keys.savedEnv);
    setCurrentEnv(BaseURL[DEFAULT_ENVIRONMENT]);
  }, []);

  const envManager = useMemo((): EnvManager => {
    return { currentEnv, updateEnv, resetEnv };
  }, [currentEnv, updateEnv, resetEnv]);

  return (
    <EnvironmentContext.Provider value={envManager}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export default useEnvironmentProvider;
