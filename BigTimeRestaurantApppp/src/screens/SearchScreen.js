import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  //const [searchApi, results, errorMessage] = useResults();
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'nashville'

        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(`Sorry cowpoke, the Honky Tonk does not seem to have them critters prepared`)
    }
  };
  //basic search for the data usin axios and yelp API, also added a try/catch to handle user search errors.....



  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have Found: {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;