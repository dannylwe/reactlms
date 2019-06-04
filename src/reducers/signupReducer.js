import { SIGN_UP } from "../actions/types";

const initialState = {
  isAuthenticating: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, isAuthenticating: true };
    default:
      return state;
  }
}
