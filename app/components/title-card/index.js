import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { container, title, icon } from "./styles";

const TitleCard = ({ text, setVisible }) => {
  return (
    <View style={container}>
      <Text style={title}>{text}</Text>
      <Icon
        type="font-awesome-5"
        name="plus-circle"
        iconStyle={icon}
        onPress={() => setVisible(true)}
      />
    </View>
  );
};

TitleCard.propTypes = {
  text: PropTypes.string.isRequired,
  setVisible: PropTypes.func.isRequired
};
TitleCard.defaultProps = {
  text: "",
  setVisible: () => console.log("setVisible")
};
export default TitleCard;
