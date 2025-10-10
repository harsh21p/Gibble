import { all, fork } from 'redux-saga/effects';
import watchCreateMaterial from '../routes/Signup/signup/saga';

export default function* rootSaga() {
  yield all([
     fork(watchCreateMaterial),
  ]);
}
