// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();


  //filtering Helper Function
  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };


  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have Found: {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList title="Cost is Real Low" results={filterResultsByPrice('$')} />
      <ResultsList title="Cost is gonna set you back" results={filterResultsByPrice('$$')} />
      <ResultsList title="Cost is...slide your paycheck accross the table" results={filterResultsByPrice('$$$')} />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;