/*
artist formerly known as "provider"
*/

const transientState = {
  "currentUser": {
    "userId": 0,
    "username": ""
  },
  "post": {
    "userId": 0,
    "title" : "",
    "description" : "",
    "imageUrl" : "",
    "year" : 0
  },
  "message": {
    "userId":0,
    "recipientId": 0,
    "read": false,
    "text": ""
  },
  "like": {
    "userId": 0,
    "postId": 0
  },
  "view": ""
}

// exports a bunch of functions:
    // favoritePost
    // setMessageDisplay
    // getMessageDisplay
    // clearFilters
    // markAllMessagesRead
    // fetchMessages
    // getMessages
    // saveMessage
    // fetchPosts
    // getPosts
    // savePost
    // fetchUsers
    // getUsers
    // toggleFavoritesOnly
    // getChosenUser
    // getView
    // setView

  // Track what has been clicked to determine which page to display. Create an object with a property called "view" with an empty string value. 
    
    // We need to create setter functions for each of the functions to alter the state to whichever has been clicked.  

    // in these setter functions, we will set the transient state of the messages, posts, and likes to whichever is selected or sent.
    




 
