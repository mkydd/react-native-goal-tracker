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
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your goal"
            onChangeText={(text) => setNewGoal({ ...newGoal, name: text })}
          ></TextInput>

          <View>
            <Text>Select when you want to complete this goal</Text>

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
                  color="pink"
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
          </View>

          <Pressable onPress={() => console.log("newgoal =", newGoal)}>
            <Text>add new goal</Text>
          </Pressable>
        </View>
        // </Pressable>
      )}
    </View>
  );
};

export default AddMenu;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
