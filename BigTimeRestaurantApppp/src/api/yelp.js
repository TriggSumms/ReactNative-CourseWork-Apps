import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 0a9octpDgQbaM6HBtCtaoua0wMlJDiKt8r0vweImQNJj4lJ4HAOSXNp4fzU6JMs4aRXJ4TfwhcSTTzrGY866hI8UQBPHZ7Yto3nECuZ_qOEMHazaH28bDFJmeRT1X3Yx'
  }
});