import React from "react";
import renderer from "react-test-renderer";
import NavBar from "../NavBar";

describe("NavBar", () => {
  it("should render without failing", () => {
    const wrapper = renderer.create(<NavBar />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
