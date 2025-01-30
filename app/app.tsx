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
import { changeCompleted, deleteGoal } from "./src/store/slices/goalsSlice";
import AddMenu from "./components/AddMenu";
import NavBar from "./components/NavBar";

type ItemData = {
  name: string;
  timeLine: string;
  completed: boolean;
  count: number;
  total: 1 | 12 | 365;
};

type TimeLine = "daily" | "monthly" | "yearly";

const App = () => {
  const [showAddMenu, setShowAddMenu] = useState<boolean>(false);
  const [displayTimeLine, setDisplayTimeLine] = useState<TimeLine>("daily");

  const allGoals = useSelector((state: any) => state.goals.allGoals);
  const dispatch = useDispatch();

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <Pressable
        style={styles.listItem}
        onPress={() => dispatch(changeCompleted(item))}
      >
        <Pressable
          style={styles.buttonWrapper}
          onPress={() => dispatch(deleteGoal(item))}
        >
          <Text style={styles.buttonText}>X</Text>
        </Pressable>
        <Text
          style={[item.completed ? { textDecorationLine: "line-through" } : {}]}
        >
          {item.name} ({item.count}/{item.total})
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <AddMenu display={showAddMenu} setDisplay={setShowAddMenu} />

        <FlatList
          data={allGoals.filter(
            (goal: ItemData) => goal.timeLine === displayTimeLine
          )}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />

        <NavBar setTimeLine={setDisplayTimeLine} />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: "black",
  },
  safeView: {
    flex: 1,
  },
  buttonWrapper: {
    position: "absolute",
    margin: 20,
    top: 0,
    right: 0,
  },
  buttonText: {
    color: "red",
  },
  listItem: {
    width: "48%",
    margin: "1%",
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  row: {
    // gap: "2%",
  },
});
