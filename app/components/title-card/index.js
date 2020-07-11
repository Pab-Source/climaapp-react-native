import React from "react";
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

TitleCard.defaultProps = {
  text: "",
  setVisible: () => {}
};
export default TitleCard;
