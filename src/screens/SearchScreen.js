import React, { useState } from "react";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const onTermSubmit = term => {
    console.log(`Term: ${term} submited`);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={onTermSubmit}
      />
    </View>
  );
};

export default SearchScreen;
