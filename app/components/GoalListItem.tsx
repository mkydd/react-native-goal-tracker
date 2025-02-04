import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  changeCompleted,
  decrementCount,
  deleteGoal,
  incrementCount,
} from "../src/store/slices/goalsSlice";
import { useDispatch } from "react-redux";
import { ItemData } from "../../types/goals";
import ProgressBar from "./ProgressBar";

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

      <ProgressBar item={item} />

      <View style={styles.itemActions}>
        <Pressable
          style={styles.buttonWrapper}
          onPress={() => dispatch(decrementCount(item))}
        >
          <Text style={[styles.buttonText, { color: "#037fff" }]}>-</Text>
        </Pressable>

        <Pressable
          style={styles.buttonWrapper}
          onPress={() => dispatch(deleteGoal(item))}
        >
          <Text style={styles.buttonText}>x</Text>
        </Pressable>

        <Pressable
          style={styles.buttonWrapper}
          onPress={() => dispatch(incrementCount(item))}
        >
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
  itemActions: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  buttonWrapper: {
    width: "25%",
  },
  buttonText: {
    textAlign: "center",
    color: "red",
    fontSize: 20,
    paddingBlock: 5,
  },
});
