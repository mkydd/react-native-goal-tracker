import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  changeCompleted,
  decrementCount,
  deleteGoal,
  incrementCount,
} from "../src/store/slices/goalsSlice";
import { useDispatch } from "react-redux";
import { ItemData } from "../types/goals";

const GoalListItem = ({ item }: { item: ItemData }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.listItem}>
      <Pressable onPress={() => dispatch(changeCompleted(item))}>
        <Text
          style={[
            styles.goalName,
            item.completed ? { textDecorationLine: "line-through" } : {},
          ]}
        >
          {item.name}
        </Text>
      </Pressable>
      <View style={styles.progressBarContainer}>
        <Text>0</Text>
        <View style={styles.progressBarWrapper}>
          <View
            style={[
              styles.progressBar,
              { width: `${(item.count / item.total) * 100}%` },
            ]}
          />
          <Text style={styles.progressBarCount}>{item.count}</Text>
        </View>
        <Text>{item.total}</Text>
      </View>

      <View style={styles.itemActions}>
        <Pressable style={{}} onPress={() => dispatch(decrementCount(item))}>
          <Text style={[styles.buttonText, { color: "#037fff" }]}>-</Text>
        </Pressable>

        <Pressable style={{}} onPress={() => dispatch(deleteGoal(item))}>
          <Text style={styles.buttonText}>x</Text>
        </Pressable>

        <Pressable style={{}} onPress={() => dispatch(incrementCount(item))}>
          <Text style={[styles.buttonText, { color: "#037fff" }]}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GoalListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    marginBlock: 2,
    borderWidth: 1,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e4e4",
  },
  goalName: {
    textTransform: "capitalize",
  },
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
  itemActions: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  buttonText: {
    color: "red",
    fontSize: 20,
  },
});
