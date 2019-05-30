import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import Dashboard from "../Dashboard";

describe("Dashboard", () => {
  it("should render without failing", () => {
    const wrapper = renderer.create(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
describe("Dashboard", () => {
  it("calls componentDidMount", () => {
    const spy = jest.spyOn(Dashboard.prototype, "componentDidMount");
    const wrapper = mount(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it("calls getParcels", () => {
    const component = shallow(<Dashboard />);
    const getParcels = jest.fn().mockImplementation();
    getParcels.mockReturnValue([{ key: 0, itemName: "parcel" }]);
    component.instance().getParcels()
  });
});
