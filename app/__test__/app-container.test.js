import React from "react";
import renderer from "react-test-renderer";
import AppContainer from "../app-container";

describe("<AppContainer />", () => {
  it("has 3 child", () => {
    const tree = renderer.create(<AppContainer />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});
