import { FINISH_LOGIN } from "./types";
import axios from "axios";

export const loginAuthentication = (
  loginUrl,
  loginDetails,
  history
) => dispatch =>
  axios.post(loginUrl, loginDetails, { withCredentials: true }).then(resp => {
    if (resp.data.message == "Logged in successfully. Welcome to sendIT") {
      dispatch({ type: FINISH_LOGIN, payload: true });
      history.push("/dashboard");
    } else if (resp.data.message == "Logged in as admin. Dashboard") {
      dispatch({ type: FINISH_LOGIN, payload: true });
      history.push("/admin");
    }
  });
