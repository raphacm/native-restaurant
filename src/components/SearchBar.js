import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <MaterialIcons name="search" style={styles.icon} />
      <TextInput placeholder="search" style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
    height: 45,
    borderRadius: 5,
    marginHorizontal: 15
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10
  },
  textInput: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;
