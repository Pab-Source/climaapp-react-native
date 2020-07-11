import { convertTemp, generateReport } from "../../utils/generate-report";
import { weather } from "./weather";
import { weatherFive } from "./weatherFive";

describe("state generation functions", () => {
  const tempTestString = "300";
  const tempTestNumber = 300;
  const fiveDaysFilter = weatherFive.list.filter(i =>
    i.dt_txt.includes("00:00:00")
  );
  const newList = fiveDaysFilter.map(m => ({
    temp: convertTemp(m.main.temp),
    temp_min: convertTemp(m.main.temp_min),
    temp_max: convertTemp(m.main.temp_max),
    sensation: convertTemp(m.main.feels_like),
    date: m.dt_txt
  }));
  const newState = {
    name: weather.name,
    temp: convertTemp(weather.main.temp),
    temp_min: convertTemp(weather.main.temp_min),
    temp_max: convertTemp(weather.main.temp_max),
    sensation: convertTemp(weather.main.feels_like),
    humidity: weather.main.humidity,
    next: newList
  };

  test("convert temperature from fahrenheit to celsius with string", () => {
    const test = convertTemp(tempTestString);
    expect(test).toBe(27.0);
  });
  test("convert temperature from fahrenheit to celsius with number", () => {
    const test = convertTemp(tempTestNumber);
    expect(test).toBe(27.0);
  });

  test("generate state function", async () => {
    await generateReport(weather, fiveDaysFilter, state => {
      expect(state).toEqual(newState);
    });
  });
});

//convert temperature to celsius
