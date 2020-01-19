import { useState, useEffect } from "react";
import axios from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await axios.get("/search", {
        params: {
          term: searchTerm,
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

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
