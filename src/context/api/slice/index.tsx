import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import {
  GetApiSuccess,
  GetApiProps,
  GetApiInfo,
  GetApiError,
} from "types";

export const initialState: GetApiInfo = {
  getApiPayload: undefined,
  isGetApiLoading: false,
  getApiResponse: undefined,
  getApiError: undefined,
};

export const getApiSlice = createSlice({
  name: "getApi",
  initialState,
  reducers: {
    callGetApi: (state, action: PayloadAction<GetApiProps>) => {
      return { 
        ...initialState, 
        getApiPayload: action.payload,
        isGetApiLoading: true,
      };
    },
    getApiSuccess: (
      state,
      action: PayloadAction<GetApiSuccess>
    ) => {
      state.getApiResponse = action.payload;
      state.isGetApiLoading = false;
    },
    getApiError: (state, action: PayloadAction<GetApiError>) => {
      state.getApiError = action.payload;
      state.isGetApiLoading = false;
    },
    clearGetApiResponse: () => {
      return { ...initialState };
    },
  },
});

export const {
  callGetApi,
  getApiSuccess,
  getApiError,
  clearGetApiResponse,
} = getApiSlice.actions;

export const getApiInfo = (state: RootState) => state.getApi;

const getApiReducer = getApiSlice.reducer;
export default getApiReducer;
