import React from "react";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Parcel, { CreateParcel } from "../CreateParcel";
import { Provider } from "react-redux";
import store from "../../../../store";

describe("CreateParcel", () => {
  it("should render without failing", () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Parcel />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it("should handle changes", () => {
    const wrapper = shallow(<CreateParcel />);
    const spy = jest.spyOn(wrapper.instance(), "handleChange");
    wrapper
      .find("#pickupInput")
      .simulate("change", { target: { pickup: "test_pickup" } });
    wrapper
      .find("#destinationInput")
      .simulate("change", { target: { destination: "test_destination" } });
    wrapper
      .find("#nicknameInput")
      .simulate("change", { target: { nickname: "test_nickname" } });
    wrapper
      .find("#weightInput")
      .simulate("change", { target: { weight: "5" } });
    wrapper
      .find("#heightInput")
      .simulate("change", { target: { height: "6" } });
    expect(spy).toHaveBeenCalled();
  });
  it("should call submit", () => {
    const props = {
      createParcelAction: jest.fn()
    };
    const wrapper = shallow(<CreateParcel {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "onSubmit");
    const event = { preventDefault: jest.fn() };
    wrapper.instance().onSubmit(event);
    expect(spy).toHaveBeenCalled();
  });
});
