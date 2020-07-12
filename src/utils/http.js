const httpGet = async url => {
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export const getWeatherCity = async (option, callbackFn) => {
  const today = await httpGet(
    `https://api.openweathermap.org/data/2.5/weather?q=${option}&APPID=6e40c92c855a114f93206b096ebad52c`
  );
  return await callbackFn(today);
};

export const getFiveDaysWeather = async (option, callbackFn) => {
  const fiveDays = await httpGet(
    `https://api.openweathermap.org/data/2.5/forecast?q=${option}&appid=6e40c92c855a114f93206b096ebad52c`
  );
  return await callbackFn(fiveDays);
};
