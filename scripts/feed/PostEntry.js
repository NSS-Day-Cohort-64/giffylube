/*
handles user interactions and state changes related to posting entries
*/

import { setView } from "../data/TransientState.js"

// import savePost from ./data/TransientState.js
// declare PostEntry function
//  create title, url, description, year as object to send to API
// attach 2 click event listeners:
    // Cancel button
    // Save button

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

// export PostEntry function to main.js
export const PostEntry = () => {
    let postHTMLform = `
    <div class="postHeader"><h2>Post a gif to GiffyLube</h2></div>  
        <section id="postEntryForm">  
            <div class="postEntry">   
                <div class="postEntry__row postEntry__title">
                    <label class="postEntry--label" for="postEntryTitle">Title of Post: </label>   
                    <input id="postEntryTitle" class="postEntry--input" type="text" placeholder="Enter Title for Gif" name="Title">
                </div>
                <div class="postEntry__addGif">
                    <h4>Paste a gif url --OR-- upload a .gif file here<h4>  
                    <div class="postEntry__row postEntry__url">
                        <label class="postEntry--label" for="gifUrl">Gif url : </label>
                        <input id="gifUrl" class="postEntry--input" type="text" placeholder="Paste the Gif url here" name="Url">
                    </div>

                    <div>
                        <label for="gif-upload">Upload Gif:</label>
                        <input type="file" id="gif-upload" name="gif-upload">
                    </div>
                </div>
                
                <div class="postEntry__row postEntry__description">
                    <label class="postEntry--label" for="postEntryDescription">Description : </label>
                    <input id="postEntryDescription" class="postEntry--input" type="text" placeholder="Enter a description for the post here" name="Description">
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