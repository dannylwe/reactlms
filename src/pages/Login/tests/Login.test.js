import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import Login from "../Login";

describe("Login", () => {
  it("should render without failing", () => {
    const wrapper = renderer.create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe("Login", () => {
  const component = shallow(<Login />);
  it("handleChange function should be called", () => {
    const event = {
      target: { name: "" }
    };
    event.preventDefault = jest.fn();
    component.instance().setState({ username: "example", password: "123344" });
    component.instance().handleChange(event);
    component
      .find("input")
      .at(1)
      .simulate("change", { target: { name: "username", value: 3 } });
    const state = component.state();
    expect(state.username).toEqual(3);
    component.instance().onSubmit(event);
  });
});
