import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  picker: {
    color: "white",
    width: width - 20,
    marginHorizontal: 15
  },
  item: {
    borderBottomWidth: 1
  },
  btnContainer: {
    height: 50,
    width: width - 20,
    marginHorizontal: 10
  }
});

export const { picker, item, btnContainer } = styles;
