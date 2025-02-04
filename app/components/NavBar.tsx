import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TimeLine = "daily" | "monthly" | "yearly";

interface NavBarProps {
  setTimeLine: React.Dispatch<React.SetStateAction<TimeLine>>;
  currTimeline: TimeLine;
}

const NavBar = (props: NavBarProps) => {
  const { setTimeLine, currTimeline } = props;

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      {["daily", "monthly", "yearly"].map((option) => (
        <Pressable
          key={option}
          style={styles.buttonWrapper}
          onPress={() => setTimeLine(option as TimeLine)}
        >
          <Text
            style={[
              styles.button,
              { color: currTimeline === option ? "#037fff" : "white" },
            ]}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Text>
        </Pressable>
      ))}
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
    flexDirection: "row",
    padding: 15,
    paddingBottom: 25,
    backgroundColor: "black",
  },
  buttonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "white",
    fontSize: 18,
  },
});
