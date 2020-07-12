import React from "react";
import renderer from "react-test-renderer";
import CardWeather from "../../components/card-weather";

describe("<CardWeather />", () => {
  const renderCard = renderer.create(<CardWeather />);
  test("has 3 child", () => {});
});
