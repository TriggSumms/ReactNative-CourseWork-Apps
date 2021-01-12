import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


//Hook Logic extracted from searchscreen for usability as comp

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => { //basic search for the data usin axios and yelp API, also added a try/catch to handle user search errors.....
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

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi('');
  }, []);

  return [searchApi, results, errorMessage];
};