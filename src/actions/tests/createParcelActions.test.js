import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { createParcelAction } from "../createParcelActions";
import { CREATE_PARCEL } from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("create parcel", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("succeeds", () => {
    const createDetails = {
      pickup: "test_user",
      destination: "test_password",
      nickname: "test_nickname",
      weight: "5",
      height: "5"
    };
    const props = {
      history: { push: jest.fn() },
      nickname: "test_nickname"
    };
    const createUrl = "www.heroku.sendit.com/parcels";
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          "added parcel": "test_nickname"
        }
      });
    });
    const expectedActions = [{ type: CREATE_PARCEL, payload: true }];
    return store
      .dispatch(createParcelAction(createUrl, createDetails, { ...props }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
