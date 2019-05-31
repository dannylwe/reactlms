import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { loginAuthentication } from "../loginActions";
import { FINISH_LOGIN } from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("authenticating", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("succeeds user", () => {
    const loginDetails = {
      username: "test_user",
      password: "test_password"
    };
    const props = {
      history: { push: jest.fn() }
    };
    const loginUrl = "www.heroku.sendit.com";
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: "Logged in successfully. Welcome to sendIT"
        }
      });
    });
    const expectedActions = [{ type: FINISH_LOGIN, payload: true }];
    return store
      .dispatch(loginAuthentication(loginUrl, loginDetails, props.history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("succeeds admin", () => {
    const loginDetails = {
      username: "test_user",
      password: "test_password"
    };
    const props = {
      history: { push: jest.fn() }
    };
    const loginUrl = "www.heroku.sendit.com";
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: "Logged in as admin. Dashboard"
        }
      });
    });
    const expectedActions = [{ type: FINISH_LOGIN, payload: true }];
    return store
      .dispatch(loginAuthentication(loginUrl, loginDetails, props.history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
