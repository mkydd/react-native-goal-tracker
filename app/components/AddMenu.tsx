import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

interface AddMenuProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Goal {
  name: string;
  timeLine: "daily" | "monthly" | "yearly" | "";
}

const AddMenu = (props: AddMenuProps) => {
  const { display, setDisplay } = props;
  const [newGoal, setNewGoal] = useState<Goal>({ name: "", timeLine: "" });

  return (
    <View>
      {!display && (
        <Pressable onPress={() => setDisplay(!display)}>
          <Text>Add a goal</Text>
        </Pressable>
      )}
      {display && (
        // <Pressable onPress={() => setDisplay(!display)}>
        <View>
          <TextInput
            onChangeText={(text) => setNewGoal({ ...newGoal, name: text })}
          ></TextInput>
          <TextInput
            onChangeText={(text) => {
              if (["daily", "monthly", "yearly"].includes(text)) {
                console.log("timeline =", text);
                setNewGoal({ ...newGoal, timeLine: text as Goal["timeLine"] });
              }
            }}
          ></TextInput>
          <Pressable onPress={() => console.log("newgoal =", newGoal)}>
            <Text>Print new goal</Text>
          </Pressable>
        </View>
        // </Pressable>
      )}
    </View>
  );
};

export default AddMenu;

const styles = StyleSheet.create({});
