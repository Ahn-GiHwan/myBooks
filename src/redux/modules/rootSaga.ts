import { all } from "redux-saga/effects";
import { authSaga } from "./auth";

export default function* rootSage() {
  yield all([authSaga()]);
}
