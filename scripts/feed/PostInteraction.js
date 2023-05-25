/*
handles the rendering and interaction of a post element
*/

// import deletePost, favoritePost from ./data/TransientState.js
import { deletePost, favoritePost } from '../data/TransientState.js';

// attach 2 click event listeners -- both outside any function:
    // Delete button
    // Favorite button
    const handleDeleteButtonClick = (postId) => {
        deletePost(postId);
      };
      
      const handleFavoriteButtonClick = (postId) => {
        favoritePost(postId);
      };
      
      document.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
          handleDeleteButtonClick(event.target.dataset.postId);
        }
      
        if (event.target.classList.contains('favorite-button')) {
          handleFavoriteButtonClick(event.target.dataset.postId);
        }
      });

// declare and export PostInteraction function
export const PostInteraction = (postId) => {
    return `
      <div class="post-interaction">
        <button class="delete-button" data-post-id="${postId}">DELETE</button>
        <button class="favorite-button" data-post-id="${postId}">FAVORITE</button>
      </div>
    `;
  };
