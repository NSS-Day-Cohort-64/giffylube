import { getCurrentUser, saveLike, setLike } from "../data/TransientState.js";


// handle favorite button click event
const handleFavoriteButtonClick = (event) => {
  if (event.target.classList.contains('favorite-button')) {
    const favPostId = parseInt(event.target.dataset.postid);
    const currentUserId = getCurrentUser().userId;
    const likeObject = { 
      userId: currentUserId,
      postId: favPostId
    };

    //Log like object to console to check functionality
    console.log("Here is the like object")
    console.log(likeObject)

    // Add the 'like' to transientState
    setLike(likeObject);
    // POST the like to API
    saveLike();
  }
};

// Add the event listener for the favorite button
document.addEventListener('click', handleFavoriteButtonClick);

// declare and export PostInteraction function
export const PostInteraction = (postId) => {
  return `
    <div class="post-interaction">
      <button class="favorite-button" data-postid="${postId}">FAVORITE</button>
    </div>
  `;
};

// <button class="delete-button" data-postid="${postId}">DELETE</button>
