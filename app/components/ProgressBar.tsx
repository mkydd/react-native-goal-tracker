import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { ItemData } from "../types/goals";

const ProgressBar = ({ item }: { item: ItemData }) => {
  return (
    <View style={styles.progressBarContainer}>
      <Text>0</Text>
      <View style={styles.progressBarWrapper}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${(item.count / item.total) * 100}%`,
              maxWidth: "100%",
            },
          ]}
        />
      </View>
      <Text style={styles.progressBarCount}>{item.count}</Text>
      <Text>{item.total}</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  progressBarWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "65%",
    borderWidth: 1,
    borderColor: "#037fff",
    borderRadius: 25,
  },
  progressBar: {
    backgroundColor: "#037fff",
    borderRadius: 25,
    height: 20,
  },
  progressBarCount: {
    position: "absolute",
  },
});
