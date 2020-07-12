import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  picker: {
    color: "white",
    alignItems: "center",
    marginHorizontal: 10
  },
  item: {
    borderBottomWidth: 1
  },
  btnContainer: {
    height: 50,
    marginHorizontal: 15
  }
});

export const { picker, item, btnContainer } = styles;
