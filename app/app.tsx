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

import AddMenu from "./components/AddMenu";
import NavBar from "./components/NavBar";
import GoalListItem from "./components/GoalListItem";

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

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <AddMenu display={showAddMenu} setDisplay={setShowAddMenu} />

        <FlatList
          data={allGoals.filter(
            (goal: ItemData) => goal.timeLine === displayTimeLine
          )}
          renderItem={({ item }) => <GoalListItem item={item} />}
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
    paddingBottom: 0,
    backgroundColor: "black",
  },
  safeView: {
    flex: 1,
    margin: 5,
    marginBottom: 0,
  },
  list: {
    flex: 1,
    paddingBottom: "100%",
  },
});
