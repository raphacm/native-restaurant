import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BusinessDetail from "./BusinessDetail";

const BusinessesList = ({ results = [], title }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={results => results.id}
        data={results}
        renderItem={({ item }) => <BusinessDetail {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  }
});

export default BusinessesList;
