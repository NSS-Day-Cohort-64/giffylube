/*
artist formerly known as "provider"
*/

const initialTransientState = {
  "currentUser": {
    "userId": 0,
    "name": "",
    "email": ""
  },
  "post": {
    "userId": 0,
    "title": "",
    "description": "",
    "imageUrl": "",
    "time": ""
  },
  "message": {
    "userId": 0,
    "recipientId": 0,
    "read": false,
    "text": ""
  },
  "like": {
    "userId": 0,
    "postId": 0
  },
  "view": "defaultView"
}

////////////MAKE DEEP COPY OF transientState with spread operator///////////////////////////
let transientState = { ...initialTransientState }


////////////FUNCTION TO RESET transientState back to initial/////////////////////////////
export const resetTransientState = () => {
  transientState = { ...initialTransientState }
  return transientState
}


///////////SETTER FUNCTIONS/////////////////////////////////////

// in these setter functions, we will set the transient state of the messages, posts, and likes to whichever is selected or sent.

export const setCurrentUser = (currentUserObject) => {
  transientState.currentUser.userId = currentUserObject.id
  transientState.currentUser.name = currentUserObject.name
  transientState.currentUser.email = currentUserObject.email
}

export const setMessage = (messageObject) => {
  transientState.message.userId = messageObject.userId
  transientState.message.recipientId = messageObject.recipientId
  transientState.message.text = messageObject.text
}

export const setView = (view) => {
  transientState.view = view
}

export const setPost = (postObject) => {
  transientState.post.userId = postObject.userId
  transientState.post.title = postObject.title
  transientState.post.description = postObject.description
  transientState.post.imageUrl = postObject.imageUrl
  transientState.post.time = postObject.time

}

export const setLike = (likeObject) => {
  transientState.like.userId = likeObject.userId
  transientState.like.postId = likeObject.postId
}

/////////////////GETTER FUNCTIONS FROM TRANSIENT STATE////////////////////////////////////

export const getTransientState = () => {
  return transientState
}

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
  const posts = await fetch("http://localhost:8088/posts").then(response => response.json())
  return posts
}

export const fetchUsers = async () => {
  const users = await fetch("http://localhost:8088/users").then(response => response.json())
  return users
}

export const fetchLikes = async () => {
  const likes = await fetch("http://localhost:8088/likes").then(response => response.json())
  return likes
}

export const fetchMessages = async () => {
  const messages = await fetch("http://localhost:8088/messages").then(response => response.json())
  return messages
}


// deletePost ??

// clearFilters
// markAllMessagesRead???
// toggleFavoritesOnly

////////////////////USER INPUT VALIDATION//////////////////////////////////////

// Function that checks if a URL points to a GIF
const isGifUrl = async (url) => {

  //Check if the link is valid
  const response = await fetch(url, { method: 'HEAD' });
  if (!response.ok) {
    return false;
  }
  
  // if the url links to a gif, return true, else, return false
  const contentType = response.headers.get('content-type');
  return contentType === 'image/gif';
};

////////////////////SAVER FUNCTIONS (POST REQUESTS)////////////////////////////

//saveMessage
export const saveMessage = async () => {
  // Check to make sure a message is entered
  if (transientState.message.text.length > 0 && transientState.message.recipientId > 0) {
    // Define a postOptions object to specify a POST to the database
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transientState.message) // Turn the data into a string
    }
    // Send the transient state to your API
    await fetch("http://localhost:8088/messages", postOptions).then(response => {
      if (response.ok) {
        console.log("Post request successful!")
        window.alert("Your message has been sent")
        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)
      }
      else {
        console.log("Post request failed!")
        window.alert("Something went wrong")
      }
    }).catch(error => { console.error("An error occurred:", error); })
  } else if (transientState.message.recipientId === 0) {
    window.alert("This message is literally going nowhere.")

  }
  else {
      window.alert("Extreme brevity is not the soul of wit.")
  }
}


//savePost
export const savePost = async () => {
  // Check if the url points to a gif. The isGifUrl function will return true or false
  const isGif = await isGifUrl(transientState.post.imageUrl)
  // Check to make sure all information is entered
  if (transientState.post.imageUrl.length > 0 && transientState.post.title.length > 0 && transientState.post.description.length > 0 && isGif === true) {
    // Define a postOptions object to specify a POST to the database
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transientState.post) // Turn the data into a string
    }
    // Send the transient state to your API
    await fetch("http://localhost:8088/posts", postOptions).then(response => {
      if (response.ok) {
        console.log("Gif Post successful!")
        window.alert("Your gif has been posted!")

        //Set view to default
        setView("defaultView")
        //Dispatch custom event to re render HTML
        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)
      }
      else {
        console.log("Gif post failed!")
        window.alert("Something went wrong")
      }
    }).catch(error => { console.error("An error occurred:", error); })
  } else if (transientState.post.imageUrl.length > 0 && transientState.post.title.length > 0 && transientState.post.description.length > 0 && isGif === false) {
    // If user input is filled in, but the url is invalid, print a window alert
    window.alert("URL provided is either invalid or does not point to a gif image")
  } else {
    // If any user input is blank, print a window alert
    window.alert("Please enter a title, gif url, and description")
  }
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

export const deleteLike = async (likeId) => {
  // Define a deleteOptions object to specify a DELETE request to the API
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Send the DELETE request to the API with the specific likeId
  await fetch(`http://localhost:8088/likes/${likeId}`, deleteOptions);

  const customEvent = new CustomEvent("stateChanged");
  document.dispatchEvent(customEvent);
};
