import { call, put } from "redux-saga/effects";
import { setPermits } from "../../slice/permitslice";
import { requestGetPermits } from "../requests/permits";

export function* handleGetPermit(action: any): any {
  try {
    const response = yield call(requestGetPermits);
    const data = response;
    yield put(setPermits({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
