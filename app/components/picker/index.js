import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { Picker as Pick } from "@react-native-community/picker";
import { picker, item, btnContainer } from "./styles";

const Picker = ({ setOption, option, setLoading }) => {
  const cities = [
    "Seleccione una ciudad",
    "Buenos Aires",
    "Londres",
    "Bogotá",
    "Sao Paulo",
    "Lima"
  ];

  return (
    <View>
      <Pick
        style={picker}
        itemStyle={item}
        selectedValue={option}
        onValueChange={city => setOption(city)}
      >
        {cities.map((city, i) => (
          <Pick.Item key={i} color="#feae3d" label={city} value={city} />
        ))}
      </Pick>
      <Button
        containerStyle={btnContainer}
        buttonStyle={{ backgroundColor: "#feae3d" }}
        title="Buscar"
        onPress={() => setLoading(true)}
      />
    </View>
  );
};

Picker.propTypes = {
  setOption: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  setLoading: PropTypes.func.isRequired
};

Picker.defaultProps = {
  setOption: () => console.log("setOption"),
  option: "",
  setLoading: () => console.log("setLoading")
};

export default Picker;
