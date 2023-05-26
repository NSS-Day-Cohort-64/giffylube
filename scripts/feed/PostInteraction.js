// declare and export PostInteraction function
export const PostInteraction = (postId) => {
  return `
    <div class="post-interaction">
      <button class="delete-button" data-postid="${postId}">DELETE</button>
      <button class="favorite-button" data-postid="${postId}">FAVORITE</button>
    </div>
  `;
};
