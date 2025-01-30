import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TimeLine = "daily" | "monthly" | "yearly";

interface NavBarProps {
  setTimeLine: React.Dispatch<React.SetStateAction<TimeLine>>;
}

const NavBar = (props: NavBarProps) => {
  const { setTimeLine } = props;

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { bottom: insets.bottom }]}>
      <Pressable
        style={styles.buttonWrapper}
        onPress={() => setTimeLine("daily")}
      >
        <Text style={styles.button}>Daily</Text>
      </Pressable>
      <Pressable
        style={styles.buttonWrapper}
        onPress={() => setTimeLine("monthly")}
      >
        <Text style={styles.button}>Monthly</Text>
      </Pressable>
      <Pressable
        style={styles.buttonWrapper}
        onPress={() => setTimeLine("yearly")}
      >
        <Text style={styles.button}>Yearly</Text>
      </Pressable>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "black",
  },
  button: {
    color: "white",
    fontSize: 18,
  },
});
