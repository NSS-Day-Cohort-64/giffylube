/*
handles user interactions and state changes related to posting entries
*/

import { getCurrentUser, savePost, setPost } from "../data/TransientState.js"
import { setView } from "../data/TransientState.js"



// Add event listener to change view when the 'Have a post to submit?' is clicked
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "postGif") {
            setView("postGif")

            //Dispatch custom event to re render HTML
            const customEvent = new CustomEvent("stateChanged")
            document.dispatchEvent(customEvent)
        }
    }
)

// Add event listener to change view when the 'Cancel' button is clicked in the postEntry form
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "postCancelButton") {
            setView("defaultView")

            //Dispatch custom event to re render HTML
            const customEvent = new CustomEvent("stateChanged")
            document.dispatchEvent(customEvent)
        }
    }
)
// Add a function to generate the timestamp and convert it to year
const setTime = () => {
    const currentDate = new Date()
    const timeStamp = currentDate.getTime()
    return timeStamp
}

// Add function to convert timestamp
const convertDate = (timestamp) => {
    let date = new Date(timestamp)

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hours}:${minutes} on ${month}/${day}/${year}`
    return formattedTime
}

// Add a click event listener to handle posting a gif
document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "postEntryButton") {
            const currentUserId = getCurrentUser().userId
            const postTitle = document.getElementById("postEntryTitle").value
            const postDesc = document.getElementById("postEntryDescription").value
            const postUrl = document.getElementById("gifUrl").value
            const timestamp = setTime()
            const postTime = convertDate(timestamp)

            const currentPostObject = {
                "userId": currentUserId,
                "title": postTitle,
                "description": postDesc,
                "imageUrl": postUrl,
                "year": postTime
            }
            
            // Send the post to transientState
            setPost(currentPostObject)
            
            console.log("this will be posted: ")
            console.log(currentPostObject)

            // POST to API
            savePost()
        }
    }
)

// export PostEntry function to main.js
export const PostEntry = () => {
    let postHTMLform = `
      
        <section id="postEntryForm">
            <div class="postHeader"><h2>Post a gif to GiffyLube</h2></div>  
            <div class="postEntry">   
                <div class="postEntry__row postEntry__title">
                    <div><label class="postEntry--label" for="postEntryTitle">Title of Post: </label></div>   
                    <div><input id="postEntryTitle" class="postEntry--input" type="text" placeholder="Enter Title for Gif" name="Title"></div>
                </div>
                
                <div class="postEntry__row postEntry__url">
                    <div><label class="postEntry--label" for="gifUrl">Gif url : </label></div>
                    <div><input id="gifUrl" class="postEntry--input" type="text" placeholder="Paste the Gif url here" name="Url"></div>
                </div>

                <div class="postEntry__row postEntry__description">
                    <div><label class="postEntry--label" for="postEntryDescription">Description : </label></div>
                    <div><input id="postEntryDescription" class="postEntry--input" type="text" placeholder="Enter a description for the post here" name="Description"></div>
                </div> 
                  
                <div class="postEntry__row postEntry__buttonRow">
                    <button id="postEntryButton" class="postEntry--btn"  type="button">Post Gif</button>
                    <button id="postCancelButton" class="postEntry--btn"  type="button">Cancel</button>
                </div>   
      
            </div>   
        </section>
    `
    return postHTMLform
}