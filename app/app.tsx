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
  changeCompleted,
  deleteGoal,
  incrementCount,
  decrementCount,
} from "./src/store/slices/goalsSlice";
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
        <Text style={styles.progressBar}>
          ({item.count}/{item.total})
        </Text>
        <View style={styles.itemActions}>
          <Pressable style={{}} onPress={() => dispatch(decrementCount(item))}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Pressable style={{}} onPress={() => dispatch(deleteGoal(item))}>
            <Text style={styles.buttonText}>x</Text>
          </Pressable>
          <Pressable style={{}} onPress={() => dispatch(incrementCount(item))}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
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
          //   contentContainerStyle={{ paddingBottom: 100 }}
          style={styles.list}
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
    margin: 5,
  },
  list: {
    flex: 1,
    paddingBottom: "100%",
  },
  listItem: {
    padding: 8,
    marginBlock: 2,
    borderWidth: 1,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  goalName: {
    textTransform: "capitalize",
  },
  buttonText: {
    color: "red",
  },
  progressBar: {
    marginBlock: 8,
  },
  itemActions: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
