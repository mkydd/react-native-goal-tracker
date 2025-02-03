import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { ItemData } from "../../types/goals";

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  progressBarWrapper: {
    width: "65%",
    height: 20,
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "#037fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#037fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarCount: {
    position: "absolute",
  },
});
