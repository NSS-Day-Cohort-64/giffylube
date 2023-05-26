/*
handles user interactions and state changes related to posting entries
*/

// import savePost from ./data/TransientState.js
// declare PostEntry function
//  create title, url, description, year as object to send to API
// attach 2 click event listeners:
    // Cancel button
    // Save button
// export PostEntry function to main.js
export const PostEntry = () => {
    let postHTMLform = `
    <div class="postHeader"><h1>postEntry to GiffyLube</h1></div>  
        <form id="postEntryForm">  
            <div class="postEntry">   
                <div class="postEntry__row postEntry__username">
                    <label class="postEntry--label">Username : </label>   
                    <input id="username" class="postEntry--input" type="text" placeholder="Enter Username" name="username" required>
                </div>  
                <div class="postEntry__row postEntry__password">
                    <label class="postEntry--label">Password : </label>
                    <input id="password" class="postEntry--input" type="password" placeholder="Enter Password" name="password" required>
                </div>   
                  
                <div class="postEntry__row postEntry__buttonRow">
                    <button id="postEntryButton" class="postEntry--btn"  type="button">postEntry</button>
                </div>   
      
            </div>   
        </form>
    `
    

}