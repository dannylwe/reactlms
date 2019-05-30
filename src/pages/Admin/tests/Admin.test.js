import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Admin from "../Admin";

describe("Admin", () => {
  it("should render without failing", () => {
    const wrapper = renderer.create(
      <MemoryRouter>
        <Admin />
      </MemoryRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
