export const convertTemp = num => Number((num - 273).toFixed(1));

export const generateReport = async (today, next, callbackFn) => {
  const filteredList = next.map(m => ({
    temp: convertTemp(m.main.temp),
    temp_min: convertTemp(m.main.temp_min),
    temp_max: convertTemp(m.main.temp_max),
    sensation: convertTemp(m.main.feels_like),
    date: m.dt_txt
  }));

  const newReport = {
    name: today.name,
    temp: convertTemp(today.main.temp),
    temp_min: convertTemp(today.main.temp_min),
    temp_max: convertTemp(today.main.temp_max),
    sensation: convertTemp(today.main.feels_like),
    humidity: today.main.humidity,
    next: filteredList
  };

  await callbackFn(newReport);
};
