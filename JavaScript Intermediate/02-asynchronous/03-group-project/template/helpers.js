export const getPosts = async () => {
  try {
    // let response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=0&_limit=16', { 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', { 
    method: 'GET',
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } 
  catch (error) {
      console.log(error);
  }
}

export const getPost = async (post_id) => {
  // EDIT HERE
};

export const getPostComments = async (post_id) => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments', { 
    method: 'GET',
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } 
  catch (error) {
      console.log(error);
  }
};

export const getAuthor = async (user_id) => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', { 
    method: 'GET',
    });
    let jsonResponse = await response.json();
    return jsonResponse;
  } 
  catch (error) {
      console.log(error);
  }
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
};

export const getRandomPic = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/random/720x480');
    return image.url;
  } catch (error) {
    console.log('getRandomPic', error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/480x480/?profile');
    return image.url;
  } catch (error) {
    console.log('getRandomProfile', error);
    throw error;
  }
};
