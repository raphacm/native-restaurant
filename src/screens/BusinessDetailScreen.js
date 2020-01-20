import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native";
import useBusinessDetail from "../hooks/useBusinessDetail";
import { FlatList } from "react-native-gesture-handler";

const BusinessDetailScreen = ({ navigation }) => {
  const [result, errorMessage] = useBusinessDetail(navigation.getParam("id"));

  return (
    <>
      {errorMessage !== "" ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          <Image
            source={{ uri: result.image_url }}
            style={styles.displayImage}
          />
          <Text style={styles.name}>{result.name}</Text>
          <Text style={styles.additionalInfo}>
            Rating: {result.rating} Stars! - Price: {result.price}
          </Text>
          <ScrollView style={styles.content}>
            {Object(result).hasOwnProperty("location") && (
              <Text>
                Address: {result.location.display_address[0]} -{" "}
                {result.location.city} - {result.location.country}
              </Text>
            )}
            <Text>Phone: {result.display_phone}</Text>
            <Text>Status:{result.is_open_now ? " Aberto" : " Fechado"}</Text>
            <FlatList
              horizontal
              keyExtractor={result => result}
              data={result.photos}
              renderItem={({ item }) => {
                return <Image style={styles.photos} source={{ uri: item }} />;
              }}
            />
          </ScrollView>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    marginLeft: 15
  },
  displayImage: {
    width: "100%",
    height: 160,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  },
  additionalInfo: {
    fontWeight: "bold",
    color: "#aaa",
    marginBottom: 10,
    marginLeft: 15
  },
  photos: {
    width: 350,
    height: 250,
    marginTop: 5,
    marginRight: 5,
    borderRadius: 4
  }
});

export default BusinessDetailScreen;

{
}
{
}
