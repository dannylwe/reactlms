import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { signupAuthentication } from "../signupActions";
import { SIGN_UP } from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("signup", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("succeeds with user information", () => {
    global.alert = jest.fn();
    const loginDetails = {
      username: "test_user",
      password: "test_password",
      email: "test_email",
      handphone: 772504991
    };
    const props = {
      history: { push: jest.fn() }
    };
    const loginUrl = "www.heroku.sendit.com/user";
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          "Register message": "Succesfully registerd to sendIT"
        }
      });
    });
    const expectedActions = [{ type: SIGN_UP, payload: true }];
    return store
      .dispatch(signupAuthentication(loginUrl, loginDetails, props.history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
