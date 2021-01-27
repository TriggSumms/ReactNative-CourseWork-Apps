import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);


  //Just like in showScreen, we pull in the state and ask to edit the id if it is equal 
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
    //default props given as starting value 
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        //'pop' helper pushes user to previous screen 
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
