import React from "react";
import { ActivityIndicator, StyleSheet, Dimensions } from "react-native";

const Loading = () => (
  <ActivityIndicator size="large" color="red" style={styles.loading} />
);
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  loading: {
    width,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Loading;
