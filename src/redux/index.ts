import { configureStore } from "@reduxjs/toolkit";
import { permitReducer, permitSelectors } from "./slice/permitslice";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    permits: permitReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);
export { store, permitSelectors };
