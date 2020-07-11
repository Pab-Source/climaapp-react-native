import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderBottomColor: "#feae3d",
    paddingTop: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 30,
    position: "absolute",
    width: "100%",
    textAlign: "center"
  },
  icon: {
    color: "#c2c2c2",
    fontSize: 30
  }
});

export const { container, title, icon } = styles;
