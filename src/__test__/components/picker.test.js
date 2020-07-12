import React from "react";
import { create } from "react-test-renderer";
import Picker from "../../components/picker";

describe("<Picker />", () => {
  const propsPicker = {
    setOption: () => console.log("setOption"),
    option: "",
    setLoading: () => console.log("setLoading")
  };

  const { setOption, option, setLoading } = propsPicker;
  const renderPicker = create(
    <Picker setOption={setOption} setLoading={setLoading} option={option} />
  );
  test("testing props of a component", () => {
    const { props } = renderPicker.root;
    expect(propsPicker).toEqual(props);
  });
});
