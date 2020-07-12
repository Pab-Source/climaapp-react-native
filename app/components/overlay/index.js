import React from "react";
import { Overlay, Icon } from "react-native-elements";
import PropTypes from "prop-types";
import { ScrollView, View, Text } from "react-native";
import moment from "moment";
import "moment/locale/es";
import {
  overlayStyle,
  tempContainer,
  dateText,
  temp,
  iconTemp,
  iconSen,
  iconTempMin,
  iconTempHigh,
  textTemp
} from "./styles";

const OverlayCustom = ({ next, setVisible, visible }) => {
  return (
    <Overlay
      onBackdropPress={() => setVisible(false)}
      overlayStyle={overlayStyle}
      animated
      animationType="fade"
      isVisible={visible}
    >
      <ScrollView style={{ height: "100%" }}>
        {next.map((days, i) => (
          <View key={i} style={tempContainer}>
            <Text style={dateText}>
              {moment(days.date).format(`D / MMMM / YYYY`)}
            </Text>
            <View style={temp}>
              <Icon
                type="font-awesome-5"
                name="thermometer-half"
                iconStyle={iconTemp}
              />
              <Text style={textTemp}>Temperatura: {days.temp}°</Text>
            </View>
            <View style={temp}>
              <Icon
                type="font-awesome-5"
                name="thermometer"
                iconStyle={iconSen}
              />
              <Text style={textTemp}>Sensación Térmica: {days.sensation}°</Text>
            </View>
            <View style={temp}>
              <Icon
                type="font-awesome-5"
                name="temperature-low"
                iconStyle={iconTempMin}
              />
              <Text style={textTemp}>Temperatura mínima: {days.temp_min}°</Text>
            </View>
            <View style={temp}>
              <Icon
                type="font-awesome-5"
                name="temperature-high"
                iconStyle={iconTempHigh}
              />
              <Text style={textTemp}>Temperatura máxima: {days.temp_max}°</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </Overlay>
  );
};

OverlayCustom.propTypes = {
  next: PropTypes.array.isRequired,
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};
OverlayCustom.defaultProps = {
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

export default OverlayCustom;
