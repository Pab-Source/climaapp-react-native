import React from "react";
import { create } from "react-test-renderer";
import CardWeather from "../../components/card-weather";

describe("<CardWeather />", () => {
  const city = {
    name: "Buenos Aires",
    temp: 12.1,
    temp_min: 13.2,
    temp_max: 15.1,
    sensation: 10,
    next: [
      {
        temp: 12.1,
        temp_min: 13.2,
        temp_max: 15.1,
        sensation: 10,
        humidity: 12
      }
    ],
    humidity: 12
  };
  const renderCardWeather = create(<CardWeather city={city} />);
  test("testing props of a component", () => {
    const { props } = renderCardWeather.root;
    expect(props).toEqual({ city });
  });
});
