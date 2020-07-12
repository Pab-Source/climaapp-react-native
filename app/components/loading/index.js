import React from "react";
import { ActivityIndicator, StyleSheet, Dimensions, View } from "react-native";

const Loading = () => (
  <View>
    <ActivityIndicator size="large" color="#feae3d" style={styles.loading} />
  </View>
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
