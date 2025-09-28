import { AxiosProps, requestApi } from "../../../apiConfig/axios";
import { AxiosResponse } from "axios";
import { put, takeLatest, SagaReturnType, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { GetApiProps } from "types";
import { callGetApi, getApiError, getApiSuccess } from "../slice";

export function* getApi(
  action: PayloadAction<GetApiProps>
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: "GET",
      url: "https://dentalbuddy-28bb3-default-rtdb.firebaseio.com/ngrok-url.json",
    };
    const response: AxiosResponse = yield call(requestApi, requestParams);
    const { data: responseData } = response;

    if (responseData && !responseData.error) {
      yield put(getApiSuccess(responseData));
    } else {
      yield put(getApiError(responseData));
    }
  } catch (error) {
    yield put(
      getApiError({
        status: error?.response?.data?.status,
        message: error?.response?.data?.message,
        data: error?.response?.data?.data,
        error: error?.response?.data?.error
      })
    );
  }
}

export default function* watchGetApi() {
  yield takeLatest(callGetApi, getApi);
}
