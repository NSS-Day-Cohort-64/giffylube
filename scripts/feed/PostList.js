// Import the necessary functions from '../data/TransientState.js'
import { fetchLikes, fetchPosts, fetchUsers, setLike, saveLike, getCurrentUser } from '../data/TransientState.js';
import { favoritePost, unFavoritePost } from './PostInteraction.js';

// declare and export PostList function
export const PostList = async () => {
  // retrieve posts, likes, and users
  const posts = await fetchPosts();
  // reverse the order of the posts (newest first)
  posts.reverse();
  const likes = await fetchLikes();
  const users = await fetchUsers();

  // retrieve the current user
  const currentUser = getCurrentUser();

  // generate HTML for each post
  const htmlStrings = posts.map((post) => {
    // extract necessary data from the post object using destructuring
    const { id: postId, userId: postUserId, title, description, imageUrl, time } = post;

    // retrieve the user who made the post
    const user = users.find((user) => user.id === postUserId);
    const userName = user ? user.name : 'Unknown User';

    const postLikes = likes.filter((like) => like.postId === postId);
    const likesCount = postLikes.length;

    // check if the current user has already liked this post
    const userLiked = likes.find((like) => like.userId === currentUser.userId && like.postId === postId);

    // Define a default variable for the matching like id
    let matchingLikeId = 0
    // Define a default variable for the favorite button UI
    let favoriteButtonUI = null
    // If the user has liked the post, retrieve the id of the like and set favoriteButtonUI to unFavoritePost
    if (userLiked) {
      matchingLikeId = userLiked.id
      favoriteButtonUI = unFavoritePost(matchingLikeId)
    } else {
      favoriteButtonUI = favoritePost(postId)
    }
    // generate HTML for the Post component and interactions
    const postHtml = `
      <div class="post">
        <div class="post-content">
          <h2>${title}</h2>
          <p>${description}</p>
          <img src="${imageUrl}" alt="Post Image" />
          <p>Posted at ${time} by ${userName}</p>
        </div>
        <div class="post-interactions">
          <div class="likes">Likes: ${likesCount}</div>
          ${favoriteButtonUI}
        </div>
      </div>
    `;

    return postHtml;
  });

  // combine HTML strings for all posts
  const resultString = htmlStrings.join('');
  
  return resultString;
};
