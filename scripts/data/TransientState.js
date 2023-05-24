/*
artist formerly known as "provider"
*/

const transientState = {
  "currentUser": {
    "userId": 0,
    "name": "",
    "email": ""
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

///////////SETTER FUNCTIONS/////////////////////////////////////

    // in these setter functions, we will set the transient state of the messages, posts, and likes to whichever is selected or sent.

  export const setCurrentUser = (currentUserObject) => {
    transientState.currentUser.userId = currentUserObject.id
    transientState.currentUser.name = currentUserObject.name
    transientState.currentUser.email = currentUserObject.email
  }

  export const setMessage = (userId, recipientId, text) => {
    transientState.message.userId = message.userId
    transientState.message.recipientId = message.recipientId
    transientState.message.text = message.text
  }
  
  export const setView = (view) => {
    transientState.view = view
  }
  
  export const setPost = (userId, title, description, imageUrl, year) => {
    transientState.post.userId = post.userId
    transientState.post.title = post.title
    transientState.post.description = post.description
    transientState.post.imageUrl = post.imageUrl
    transientState.post.year = post.year
  
  }

  export const setLike = (userId, postId) => {
    transientState.like.userId = like.userId
    transientState.like.postId = like.postId
  }
  
/////////////////GETTER FUNCTIONS FROM TRANSIENT STATE////////////////////////////////////

  export const getMessage = () => {
    return transientState.message
  }
  
  export const getMessageDisplay = () => {
    return transientState.messageDisplay
  }

  export const getChosenUser = () => {
    return transientState.chosenUser
  }
  
  export const getView = () => {
    return transientState.view
  }

  export const getCurrentUser = () => {
    return transientState.currentUser
  }

  /////////////////GETTER FUNCTIONS FROM THE API (FETCH CALLS)////////////////////////////////////
  
  export const fetchPosts = async () => {
    const posts = await fetch("http://localhost:8088/posts").then(response=> response.json())
    return posts
  }

  export const fetchUsers = async () => {
    const users = await fetch("http://localhost:8088/users").then(response=> response.json())
    return users
  }

  export const fetchLikes = async () => {
    const likes = await fetch("http://localhost:8088/likes").then(response=> response.json())
    return likes
  }
  
  export const fetchMessages = async () => {
    const messages = await fetch("http://localhost:8088/messages").then(response=> response.json())
    return messages
  }

  
// exports a bunch of functions:
    // favoritePost
    // clearFilters
    // markAllMessagesRead???
    // toggleFavoritesOnly

    
////////////////////SAVER FUNCTIONS (POST REQUESTS)////////////////////////////

//saveMessage
export const saveMessage = async () => {
  // Check to make sure a message is entered
  if (transientState.message.text.length > 0) {
    // Define a postOptions object to specify a POST to the database
  const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState.message) // Turn the data into a string
  }
  // Send the transient state to your API
  await fetch("http://localhost:8088/messages", postOptions)

  //dispatch custom event for state change
  const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)
  } else {
    window.alert("Please enter a message")
  }
}


//savePost
export const savePost = async () => {
  // Define a postOptions object to specify a POST to the database
  const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState.post) // Turn the data into a string
  }
  // Send the transient state to your API
  await fetch("http://localhost:8088/posts", postOptions)
  const customEvent = new CustomEvent("stateChanged")
  document.dispatchEvent(customEvent)
}


//saveLike
export const saveLike = async () => {
  // Define a postOptions object to specify a POST to the database
  const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState.like) // Turn the data into a string
  }
  // Send the transient state to your API
  await fetch("http://localhost:8088/likes", postOptions)
  const customEvent = new CustomEvent("stateChanged")
  document.dispatchEvent(customEvent)

}