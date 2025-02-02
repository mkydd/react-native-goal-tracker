import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RadioButton } from "react-native-paper";
import { addGoal } from "../src/store/slices/goalsSlice";

interface AddMenuProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Goal {
  name: string;
  timeLine: "daily" | "monthly" | "yearly" | "";
  completed: boolean;
  count: number;
  total: number;
}

const AddMenu = (props: AddMenuProps) => {
  const { display, setDisplay } = props;
  const [newGoal, setNewGoal] = useState<Goal>({
    name: "",
    timeLine: "",
    completed: false,
    count: 0,
    total: 365,
  });
  const dispatch = useDispatch();

  function setTotal(option: string): number {
    switch (option) {
      case "daily":
        return 365;
      case "monthly":
        return 12;
      case "yearly":
        return 1;
      default:
        return 365;
    }
  }

  return (
    <View>
      {!display && (
        <Pressable
          style={[styles.buttonWrapper, { margin: "1%" }]}
          onPress={() => setDisplay(!display)}
        >
          <Text style={[styles.button]}>Add a goal</Text>
        </Pressable>
      )}

      {display && (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter your goal"
            placeholderTextColor="#656565"
            onChangeText={(text) => setNewGoal({ ...newGoal, name: text })}
          ></TextInput>

          <View>
            <Text style={styles.header}>
              Select when you want to complete this goal
            </Text>

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
                  color="black"
                  value={option}
                  status={newGoal.timeLine === option ? "checked" : "unchecked"}
                  onPress={() => {
                    setNewGoal({
                      ...newGoal,
                      timeLine: option as Goal["timeLine"],
                      total: setTotal(option),
                    });
                  }}
                />
                <Text>{option}</Text>
              </View>
            ))}
          </View>

          <Pressable
            style={styles.buttonWrapper}
            onPress={() => {
              console.log("newGoal ==", newGoal);
              dispatch(addGoal(newGoal));
              setNewGoal({
                name: "",
                timeLine: "",
                completed: false,
                count: 0,
                total: 365,
              });
              setDisplay(false);
            }}
          >
            <Text style={styles.button}>add new goal</Text>
          </Pressable>
          <Pressable
            style={[
              styles.buttonWrapper,
              { backgroundColor: "#FF5858", marginTop: 5 },
            ]}
            onPress={() => setDisplay(!display)}
          >
            <Text style={[styles.button]}>Cancel</Text>
          </Pressable>
        </View>
        // </Pressable>
      )}
    </View>
  );
};

export default AddMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e4e4e4",
    borderRadius: 15,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    color: "black",
  },
  header: {
    fontSize: 16,
    marginTop: 5,
  },
  buttonWrapper: {
    backgroundColor: "#037fff",
    padding: 10,
    borderRadius: 15,
  },
  button: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "capitalize",
  },
});
