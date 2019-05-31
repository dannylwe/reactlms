import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import LoginComp, { Login } from "../Login";
import { Provider } from "react-redux";
import store from "../../../../store";

describe("Login", () => {
  it("should render without failing", () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <LoginComp />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it("should handleChange when input changes", () => {
    const wrapper = shallow(<Login />);
    const spy = jest.spyOn(wrapper.instance(), "handleChange");
    wrapper
      .find("#passwordInput")
      .simulate("change", { target: { username: "abcdedfg" } });
    wrapper
      .find("#emailInput")
      .simulate("change", { target: { password: "hello" } });
    expect(spy).toHaveBeenCalled();
  });
  it("should call submit function", () => {
    const props ={
      loginAuthentication: jest.fn()
    }
    const wrapper = shallow(<Login {...props}/>);
    const event = { preventDefault: jest.fn() };
    wrapper.instance().onSubmit(event);
  });
});
