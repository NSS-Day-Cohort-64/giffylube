/*
handles the rendering and interaction of a post element
*/

// import deletePost, favoritePost from ./data/TransientState.js
import { deletePost, favoritePost } from './data/TransientState.js';

// attach 2 click event listeners -- both outside any function:
    // Delete button
    // Favorite button
document.addEventListener('click', handleDeleteButtonClick);
document.addEventListener('click', handleFavoriteButtonClick);

// declare and export PostInteraction function
export const PostInteraction = (postId) => {
  const handleDeleteButtonClick = (event) => {
    if (event.target.classList.contains('delete-button')) {
      deletePost(postId);
    }
  };

  const handleFavoriteButtonClick = (event) => {
    if (event.target.classList.contains('favorite-button')) {
      favoritePost(postId);
    }
  };

  return `
    <div class="post-interaction">
      <button class="delete-button">DELETE</button>
      <button class="favorite-button">FAVORITE</button>
    </div>
  `;
};
