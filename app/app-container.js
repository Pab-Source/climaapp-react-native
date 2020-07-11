import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { getWeatherCity, getFiveDaysWeather } from "./utils/http";
import { generateReport } from "./utils/generate-report";

//Styles
import {
  container,
  titleContainer,
  formContainer,
  report,
  title,
  span
} from "./styles";

//Components
import Picker from "./components/picker";
import CardWeather from "./components/card-weather";
import Loading from "./components/loading";

const AppContainer = () => {
  const [option, setOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const request = async option => {
      const weatherToday = await getWeatherCity(option, weather => weather);
      const fiveDays = await getFiveDaysWeather(option, next =>
        next.list.filter(i => i.dt_txt.includes("00:00:00"))
      );
      await generateReport(weatherToday, fiveDays, report =>
        setWeather([...weather, report])
      );
      setLoading(false);
    };
    option && request(option);
  }, [loading]);

  return (
    <View style={container}>
      <View style={titleContainer}>
        <Text style={title}>
          Weather|<Text style={span}>App</Text>
        </Text>
      </View>
      <View style={formContainer}>
        <Picker setLoading={setLoading} setOption={setOption} option={option} />
      </View>
      <View style={report}>
        <ScrollView horizontal onScrollAnimationEnd>
          {loading ? (
            <Loading />
          ) : (
            weather &&
            weather.reverse().map((wh, i) => <CardWeather key={i} city={wh} />)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default AppContainer;
