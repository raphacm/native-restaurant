import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const BusinessesList = ({ results = [], title }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        style={styles.list}
        keyExtractor={results => results.id}
        data={results}
        renderItem={({ item }) => (
          <View style={styles.itemList}>
            <Image style={styles.imageList} source={{ uri: item.image_url }} />
            <Text style={styles.itemTitle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20
  },
  itemList: {
    margin: 0,
    marginHorizontal: 20
  },
  imageList: {
    width: 250,
    height: 150,
    marginVertical: 10
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default BusinessesList;
