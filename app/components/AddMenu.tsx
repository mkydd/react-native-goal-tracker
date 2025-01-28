import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { RadioButton, Text as PaperText } from "react-native-paper";

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
          {["daily", "monthly", "yearly"].map((option) => (
            <View
              key={option}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <RadioButton
                value={option}
                status={newGoal.timeLine === option ? "checked" : "unchecked"}
                onPress={() =>
                  setNewGoal({
                    ...newGoal,
                    timeLine: option as Goal["timeLine"],
                  })
                }
              />
              <Text>{option}</Text>
            </View>
          ))}
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
