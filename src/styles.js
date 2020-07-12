import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#488dd8",
    justifyContent: "space-between"
  },
  titleContainer: {
    flexBasis: "20%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    flexBasis: "10%"
  },
  report: {
    marginTop: 30,
    flexBasis: "70%"
  },
  title: {
    marginTop: 40,
    color: "white",
    fontSize: 45,
    borderBottomColor: "#ccc",
    borderStyle: "solid",
    borderBottomWidth: 3
  },
  span: {
    fontSize: 30
  }
});

export const {
  container,
  titleContainer,
  formContainer,
  report,
  title,
  span
} = styles;
