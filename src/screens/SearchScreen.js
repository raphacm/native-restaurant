import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await axios.get("/search", {
        params: {
          term,
          location: "Rio de Janeiro",
          limit: 50
        }
      });

      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setResults([]);
      setErrorMessage("Something went wrong. Try again later!");
    }
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
      {errorMessage !== "" && <Text>{errorMessage}</Text>}
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
