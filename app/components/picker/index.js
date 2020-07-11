import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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
    <>
      <Pick
        style={picker}
        itemStyle={item}
        selectedValue={option}
        onValueChange={city => setOption(city)}
      >
        {cities.map((city, i) => (
          <Pick.Item key={i} label={city} value={city} />
        ))}
      </Pick>
      <Button
        containerStyle={btnContainer}
        buttonStyle={{ backgroundColor: "#feae3d" }}
        title="Buscar"
        onPress={() => setLoading(true)}
      />
    </>
  );
};

Picker.defaultProps = {
  setOption: () => {},
  option: "",
  setLoading: () => {}
};

export default Picker;
