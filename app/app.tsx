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
import { changeCompleted } from "./src/store/slices/goalsSlice";
import AddMenu from "./components/AddMenu";

type ItemData = {
  name: string;
  timeLine: string;
  completed: boolean;
};

const App = () => {
  const [showAddMenu, setShowAddMenu] = useState<boolean>(false);
  const allGoals = useSelector((state: any) => state.goals.allGoals);
  const dispatch = useDispatch();

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <Pressable
        style={styles.listItem}
        onPress={() => dispatch(changeCompleted(item))}
      >
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
      <AddMenu display={showAddMenu} setDisplay={setShowAddMenu} />

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
    backgroundColor: "black",
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
