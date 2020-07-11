import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1,
    width: width - 30,
    marginVertical: 40
  },
  tempContainer: {
    flex: 1,
    borderColor: "#feae3d",
    alignItems: "flex-start",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderStyle: "dotted",
    paddingLeft: 10
  },
  dateText: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
    textTransform: "capitalize",
    alignSelf: "center"
  },
  temp: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  iconTemp: {
    color: "#ccc",
    fontSize: 40,
    marginRight: 30
  },
  iconSen: { color: "blue", fontSize: 40, marginRight: 10 },
  iconTempMin: {
    color: "#ccc",
    fontSize: 40,
    color: "#39a1d4",
    marginRight: 10
  },
  iconTempHigh: {
    color: "#ccc",
    fontSize: 40,
    color: "#cd0602",
    marginRight: 10
  },
  textTemp: { color: "black", fontSize: 20, marginLeft: 2 }
});
export const {
  overlayStyle,
  tempContainer,
  dateText,
  temp,
  iconTemp,
  iconSen,
  iconTempMin,
  iconTempHigh,
  textTemp
} = styles;
