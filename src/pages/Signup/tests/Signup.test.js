import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import SignupDD, { Signup } from "../Signup";
import { Provider } from "react-redux";
import store from "../../../../store";

describe("signup", () => {
  global.alert = jest.fn();
  it("should render", () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <SignupDD />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it("should handle changes", () => {
    const wrapper = shallow(<Signup />);
    const spy = jest.spyOn(wrapper.instance(), "handleChange");
    wrapper
      .find("#usernameInput")
      .simulate("change", { target: { username: "test_username" } });
    wrapper
      .find("#confirmPasswordlInput")
      .simulate("change", { target: { confirmPassword: "test_password1" } });
    wrapper
      .find("#passwordlInput")
      .simulate("change", { target: { password: "test_password" } });
    wrapper
      .find("#habdphoneInput")
      .simulate("change", { target: { handphone: "0772504991" } });
    wrapper
      .find("#emailInput")
      .simulate("change", { target: { email: "test_email@gmail.com" } });
    expect(spy).toHaveBeenCalled();
  });
  it("should call submit", () => {
    const props = {
      signupAuthentication: jest.fn()
    };
    const wrapper = shallow(<Signup {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "onSubmit");
    const event = { preventDefault: jest.fn() };
    wrapper.instance().onSubmit(event);
    expect(spy).toHaveBeenCalled();
  });
  it("should call check password", () => {
    const props = {
      signupAuthentication: jest.fn()
    };
    const wrapper = shallow(<Signup {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "passwordCheck");
    wrapper
      .find("#usernameInput")
      .simulate("change", { target: { username: "test_username" } });
    wrapper
      .find("#confirmPasswordlInput")
      .simulate("change", { target: { confirmPassword: "test_password1" } });
    const event = { preventDefault: jest.fn() };
    wrapper.instance().onSubmit(event);
    expect(spy).toHaveBeenCalled();
  });
});
