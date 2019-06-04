import { SIGN_UP } from "../../actions/types";
import signupReducer from "../signupReducer";

describe("signup reducer", () => {
  it("should change isAuthenticating", () => {
    const initialState = {
      isAuthenticating: false
    };
    const action = {
      type: SIGN_UP,
      payload: true
    };
    const newState = signupReducer(initialState, action);
    expect(newState).toEqual({ isAuthenticating: true });
  });
});
