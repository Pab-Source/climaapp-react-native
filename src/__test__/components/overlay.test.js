import React from "react";
import { create } from "react-test-renderer";
import OverlayCustom from "../../components/overlay";

describe("<OverlayCustom />", () => {
  const propsOverlayCustom = {
    next: [
      {
        temp: 12.1,
        temp_min: 13.2,
        temp_max: 15.1,
        sensation: 10,
        humidity: 12
      }
    ],
    setVisible: () => console.log("setVisible"),
    visible: false
  };
  const { next, setVisible, visible } = propsOverlayCustom;
  const renderOverlayCustom = create(
    <OverlayCustom next={next} setVisible={setVisible} visible={visible} />
  );
  test("testing props of a component", () => {
    const { props } = renderOverlayCustom.root;
    expect(propsOverlayCustom).toEqual(props);
  });
});
