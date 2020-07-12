import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const _temp_ = {
  flexBasis: "50%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "#f2f2f2",
  borderStyle: "dashed",
  height: "40%"
};

const styles = StyleSheet.create({
  cardWeather: {
    width,
    height: "90%"
  },
  containerCard: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingVertical: 10
  },
  dividerStyle: {
    backgroundColor: "#feae3d",
    height: 2
  },
  tempToday: {
    flexBasis: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  temps: {
    flexBasis: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  tempMin: {
    ..._temp_,
    justifyContent: "center",
    borderLeftWidth: 2,
    borderTopWidth: 2
  },
  tempMax: {
    ..._temp_,
    justifyContent: "center",
    borderRightWidth: 2,
    borderTopWidth: 2
  },
  sent: {
    ..._temp_,
    justifyContent: "center",
    borderLeftWidth: 2,
    borderBottomWidth: 2
  },
  humd: {
    ..._temp_,
    justifyContent: "center",
    borderRightWidth: 2,
    borderBottomWidth: 2
  },
  textTemp: { fontSize: 20, marginLeft: 15, color: "gray" }
});
export const {
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
} = styles;
