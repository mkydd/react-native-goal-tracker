import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface AddMenuProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddMenu = (props: AddMenuProps) => {
  const { display, setDisplay } = props;
  return (
    <View>
      {!display && (
        <Pressable onPress={() => setDisplay(!display)}>
          <Text>Add a goal</Text>
        </Pressable>
      )}
      {display && (
        <Pressable onPress={() => setDisplay(!display)}>
          <Text>Goal Name</Text>
          <Text>TimeLine</Text>
        </Pressable>
      )}
    </View>
  );
};

export default AddMenu;

const styles = StyleSheet.create({});
