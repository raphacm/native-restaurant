import { useState, useEffect } from "react";
import axios from "../api/yelp";

export default id => {
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchBusinessDetail = async id => {
    try {
      const response = await axios.get(`/${id}`);
      setResult(response.data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Something went wrong! Try again later!" + error);
      setResult("");
    }
  };

  useEffect(() => {
    fetchBusinessDetail(id);
  }, []);

  return [result, errorMessage];
};
