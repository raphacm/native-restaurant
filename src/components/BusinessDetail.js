import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const BusinessDetail = ({ name, image_url, rating, review_count }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginVertical: 5
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.8
  },
  details: {
    color: "#aaa",
    fontWeight: "bold",
    fontSize: 12
  }
});

export default BusinessDetail;
