import { combineReducers } from '@reduxjs/toolkit';
import createMaterialReducer from '../../routes/Signup/signup/slice';

const rootReducer = combineReducers({
  createMaterial: createMaterialReducer,
});

export default rootReducer;
