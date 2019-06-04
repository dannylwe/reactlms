import { CREATE_PARCEL } from "./types";
import axios from "axios";

export const createParcelAction = (
  createUrl,
  createDetails,
  history, nickname
) => dispatch =>
  axios.post(createUrl, createDetails, { withCredentials: true }).then(resp => {
    if (resp.status === 201) {
      dispatch({ type: CREATE_PARCEL, payload: true });
      alert("created parcel " + nickname);
      window.location.href = "/dashboard";
    }
  });
