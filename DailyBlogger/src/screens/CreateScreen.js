import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


//Shows reuasability of the code, *pulled from ShowScreen
//Side note, brings in our form and sets state through submission of the route

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        //after saving the blog post we will push the user via 'hist'/'navigate' back to the index/home route pg
        
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
