import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addGoal,
  decrement,
  incrementByAmount,
} from "./src/store/slices/goalsSlice";

type ItemData = {
  name: string;
  timeLine: string;
  completed: boolean;
};

const App = () => {
  const allGoals = useSelector((state: any) => state.goals.allGoals);
  const dispatch = useDispatch();

  function changeCompleted(item: ItemData) {
    //       let newGoals = [...goals];
    //       const goalToUpdate = newGoals.find((goal) => goal.name === item.name);
    //       if (goalToUpdate) {
    //         goalToUpdate.completed = !goalToUpdate.completed;
    //       }
    //       setGoals(newGoals);
  }

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <Pressable style={styles.listItem} onPress={() => changeCompleted(item)}>
        <Text
          style={[item.completed ? { textDecorationLine: "line-through" } : {}]}
        >
          {item.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <FlatList
          data={allGoals}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  safeView: {
    flex: 1,
  },
  listItem: {
    width: "48%",
    margin: "1%",
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  row: {
    // gap: "2%",
  },
});
