import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Icon, Card } from "react-native-elements";
import OverlayCustom from "../overlay";
import TitleCard from "../title-card";
import PropTypes from "prop-types";

//Styles
import {
  cardWeather,
  containerCard,
  dividerStyle,
  tempToday,
  temps,
  tempMin,
  tempMax,
  sent,
  humd,
  textTemp
} from "./styles";

const CardWeather = ({ city }) => {
  const { name, temp, temp_min, temp_max, sensation, next, humidity } = city;
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <OverlayCustom next={next} setVisible={setVisible} visible={visible} />
      <View style={cardWeather}>
        <Card
          containerStyle={containerCard}
          title={<TitleCard text={name} setVisible={setVisible} />}
          titleStyle={{ fontSize: 30 }}
          dividerStyle={dividerStyle}
        >
          <View style={tempToday}>
            <Icon
              type="font-awesome-5"
              name="thermometer-half"
              iconStyle={{ color: "#ccc", fontSize: 75 }}
            />
            <Text style={{ fontSize: 100, color: "#585858" }}>{temp}°</Text>
          </View>
          <View style={temps}>
            <View style={tempMin}>
              <Icon
                type="font-awesome-5"
                name="temperature-low"
                iconStyle={{ color: "#488dd8", fontSize: 30 }}
              />
              <Text style={textTemp}>{temp_min}°/min</Text>
            </View>
            <View style={tempMax}>
              <Icon
                type="font-awesome-5"
                name="temperature-high"
                iconStyle={{ color: "red", fontSize: 30 }}
              />
              <Text style={textTemp}>{temp_max}°/max</Text>
            </View>
            <View style={sent}>
              <Icon
                type="font-awesome-5"
                name="thermometer"
                iconStyle={{ color: "blue", fontSize: 30 }}
              />
              <Text style={textTemp}>{sensation}°/sen</Text>
            </View>
            <View style={humd}>
              <Icon
                type="font-awesome-5"
                name="tint"
                iconStyle={{ color: "blue", fontSize: 30 }}
              />
              <Text style={textTemp}>{humidity}%/hum</Text>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

CardWeather.propType = {
  city: PropTypes.object
};
CardWeather.defaultProps = {
  city: {
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
  }
};
export default CardWeather;
