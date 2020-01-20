import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BusinessDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Details of {navigation.getParam("id")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BusinessDetailScreen;
