/*
generates a list of posts, retrieves posts and likes using data provider functions 
and generates HTML for each post using the `Post` component returned as a string
*/

// import getLikes, getPosts, getUsers from ./data/TransientState.js
import { fetchLikes, fetchPosts, fetchUsers } from '../data/TransientState.js';
// import { PostInteraction } from './PostInteraction.js';

// declare and export PostList function
export const PostList = async () => {
  // retrieve posts, likes, and users
  const posts = await fetchPosts();
  const likes = await fetchLikes();
  const users = await fetchUsers();

  // generate HTML for each post using the Post component
  const htmlStrings = posts.map((post) => {
    // extract necessary data from the post object using destructuring
    const { userId, title, description, imageUrl, year } = post;

    // retrieve the user who made the post
    const user = users.find((user) => user.userId === userId);
    const userName = user ? user.name : 'Unknown User';

    const postLikes = likes.filter((like) => like.postId === post.postId);
    const likesCount = postLikes.length;

    // generate HTML for the Post component and interactions
    const postHtml = `
        <div class="post">
        <div class="post-content">
          <h2>${title}</h2>
          <p>${description}</p>
          <img src="${imageUrl}" alt="Post Image" />
          <p>Year: ${year}</p>
        </div>
        <div class="post-interactions">
          <div class="user">${userName}</div>
        <div class="likes">Likes: ${likesCount}</div>
       </div>
      </div>
    `;

    return postHtml;
  });

  // combine HTML strings for all posts
  const resultString = htmlStrings.join('');

  return resultString;
};


//          ${PostInteraction(post.postId)}