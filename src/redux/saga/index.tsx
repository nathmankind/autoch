import { takeLatest } from "redux-saga/effects";
import { getPermits } from "../slice/permitslice";
import { handleGetPermit } from "./handlers/permits";

export function* watcherSaga() {
  yield takeLatest(getPermits.type, handleGetPermit);
}
