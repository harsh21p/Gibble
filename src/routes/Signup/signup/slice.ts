import { RootState } from "redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CreateMaterialSuccess,
  CreateMaterialProps,
  CreateMaterialInfo,
  CreateMaterialError,
} from "types";

export const initialState: CreateMaterialInfo = {
  createMaterialPayload: undefined,
  isCreateMaterialLoading: false,
  createMaterialResponse: undefined,
  createMaterialResponseError: undefined,
};

export const createMaterialSlice = createSlice({
  name: "createMaterial",
  initialState,
  reducers: {
    callCreateMaterial: (state, action: PayloadAction<CreateMaterialProps>) => {
      state.createMaterialPayload = action.payload;
      state.isCreateMaterialLoading = true;
    },
    createMaterialSuccess: (
      state,
      action: PayloadAction<CreateMaterialSuccess>
    ) => {
      state.createMaterialResponse = action.payload;
      state.isCreateMaterialLoading = false;
    },
    createMaterialError: (state, action: PayloadAction<CreateMaterialError>) => {
      state.createMaterialResponseError = action.payload;
      state.isCreateMaterialLoading = false;
    },
    clearCreateMaterialResponse: () => {
      return { ...initialState };
    },
  },
});

export const {
  callCreateMaterial,
  createMaterialSuccess,
  createMaterialError,
  clearCreateMaterialResponse,
} = createMaterialSlice.actions;

export const createMaterialInfo = (state: RootState) => state.createMaterial;

const createMaterialReducer = createMaterialSlice.reducer;
export default createMaterialReducer;