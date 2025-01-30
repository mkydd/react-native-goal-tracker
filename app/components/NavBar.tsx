import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface NavBarProps {
  timeLine: "daily" | "monthly" | "yearly";
}

const NavBar = (props: NavBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NavBar</Text>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    color: "red",
  },
});
