import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Signin from "../components/Signin";
import { login as loginSagaStsrt } from "../redux/modules/auth";

export default function SigninContainer() {
  const dispatch = useDispatch();

  const login = useCallback(
    (reqData) => {
      dispatch(loginSagaStsrt(reqData));
    },
    [dispatch]
  );

  return <Signin login={login} />;
}
