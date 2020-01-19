import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useBusinesses();

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
