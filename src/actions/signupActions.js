import { SIGN_UP } from "./types";
import axios from "axios";

export const signupAuthentication = (
  loginUrl,
  loginDetails,
  history
) => dispatch =>
  axios.post(loginUrl, loginDetails, { withCredentials: true }).then(resp => {
    if (resp.data["Register message"] == "Succesfully registerd to sendIT") {
      dispatch({ type: SIGN_UP, payload: true });
      alert(resp.data["Register message"]);
      history.push("/login");
    }
  });
