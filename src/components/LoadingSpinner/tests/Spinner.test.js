import React from "react";
import renderer from "react-test-renderer";
import Spinner from "../Spinner";

describe("Spinner", () => {
  it("should render without failing", () => {
    const wrapper = renderer.create(<Spinner />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
