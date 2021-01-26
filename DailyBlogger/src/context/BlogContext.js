import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';



// Example below use's the reducer function again from prior examples. Passing in an object through 'type' to change the state and a 'payload' to describe change to the counter.
//1stArgument = state variable...array of blog posts, 2ndArgument = the action


//Redux BABY!!!
const blogReducer = (state, action) => {

  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      //mapping through the current BlogPost array
      return state.map(blogPost => {
        return blogPost.id === action.payload.id
          ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    //removes the payload or 'id'
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const addBlogPost = dispatch => {
  //Example with JSON integration.... dispatch ({ type: 'add_blogpost'});
  ///try catch example can be utilized here
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });

    //only runs if
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {

    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({
      type: 'delete_blogpost',
      payload: id
    });
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    //First arg(id) and second arg new(title/content)
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({
      type: 'edit_blogpost',
      payload: { id, title, content }
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
