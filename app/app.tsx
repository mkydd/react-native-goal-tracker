import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import AddMenu from "./components/AddMenu";
import NavBar from "./components/NavBar";
import GoalListItem from "./components/GoalListItem";
import { TimeLine, ItemData } from "../types/goals";

const App = () => {
  const [showAddMenu, setShowAddMenu] = useState<boolean>(false);
  const [displayTimeLine, setDisplayTimeLine] = useState<TimeLine>("daily");

  const allGoals = useSelector((state: any) => state.goals.allGoals);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeView}>
        <Text style={styles.header}>MK Goal Tracker</Text>

        <AddMenu display={showAddMenu} setDisplay={setShowAddMenu} />

        <FlatList
          data={allGoals.filter(
            (goal: ItemData) => goal.timeLine === displayTimeLine
          )}
          renderItem={({ item }) => <GoalListItem item={item} />}
          style={styles.list}
        />

        <NavBar
          setTimeLine={setDisplayTimeLine}
          currTimeline={displayTimeLine}
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
    paddingBottom: 0,
    backgroundColor: "black",
  },
  safeView: {
    flex: 1,
    margin: 5,
    marginBottom: 0,
  },
  header: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
    margin: 10,
  },
  list: {
    flex: 1,
    paddingBottom: "100%",
  },
});
