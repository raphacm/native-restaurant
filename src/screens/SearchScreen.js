import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await axios.get("/search", {
      params: {
        term,
        location: "Rio de Janeiro",
        limit: 50
      }
    });

    setResults(response.data.businesses);
  };

  const onTermSubmit = term => {
    searchApi(term);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={onTermSubmit}
      />
      <Text>We have found {results.length} results</Text>
      <FlatList
        keyExtractor={results => results.id}
        data={results}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default SearchScreen;
