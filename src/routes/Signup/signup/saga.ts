import { AxiosProps, requestApi } from "apiConfig/axios";
import { AxiosResponse } from "axios";
import { put, takeLatest, SagaReturnType, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
callCreateMaterial,createMaterialSuccess,createMaterialError
} from "../slice";
import { CreateMaterialProps } from "types";

export function* createMaterial(
  action: PayloadAction<CreateMaterialProps>
): SagaReturnType<any> {
  try {
    const userPayload = action.payload;
    const requestParams: AxiosProps = {
      type: "POST",
      url: "/materials",
      params: userPayload,
    };
    const response: AxiosResponse = yield call(requestApi, requestParams);
    const { data: responseData } = response;

    if (responseData && !responseData.error) {
      yield put(createMaterialSuccess(responseData));
    } else {
      yield put(createMaterialError(responseData));
    }
  } catch (error) {
    yield put(
      createMaterialError({
        error:
          error?.response?.data?.message ||
          "Please check your internet connectivity and try agin after some time.",
      })
    );
  }
}

export default function* watchCreateMaterial() {
  yield takeLatest(callCreateMaterial, createMaterial);
}