import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import BusinessesList from "../components/BusinessesList";
import useBusinesses from "../hooks/useBusinesses";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useBusinesses();

  const filterByPrice = price => {
    return results.filter(business => business.price === price);
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
      <BusinessesList title="Cost Effective" results={filterByPrice("$")} />
      <BusinessesList title="Bit Pricer" results={filterByPrice("$$")} />
      <BusinessesList title="Big Spender!" results={filterByPrice("$$$")} />
    </View>
  );
};

export default SearchScreen;
