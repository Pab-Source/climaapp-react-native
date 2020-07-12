import React from "react";
import renderer from "react-test-renderer";
import AppContainer from "../app-container";

describe("<AppContainer />", () => {
  const renderApp = renderer.create(<AppContainer />).toJSON();
  test("has 3 child", () => {
    expect(renderApp.children.length).toBe(3);
  });
  test("renders correctly", () => {
    const tree = renderer.create(<AppContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
