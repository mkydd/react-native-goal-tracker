import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

type ItemData = {
  name: string;
  timeLine: string;
  completed: boolean;
};

const daily = () => {
  const [goals, setGoals] = useState([
    {
      name: "stretch",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "read",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "workout",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "run",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "eat healthy",
      timeLine: "daily",
      completed: false,
    },
    {
      name: "walk",
      timeLine: "daily",
      completed: false,
    },
  ]);

  function changeCompleted(item: ItemData) {
    let newGoals = [...goals];
    const goalToUpdate = newGoals.find((goal) => goal.name === item.name);

    if (goalToUpdate) {
      goalToUpdate.completed = !goalToUpdate.completed;
    }

    setGoals(newGoals);
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
      <SafeAreaView>
        <FlatList
          data={goals}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </SafeAreaView>
    </View>
  );
};

export default daily;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  listItem: {
    width: "50%",
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  row: {
    gap: 5,
  },
});
