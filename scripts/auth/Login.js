/* 
a basic implementation of a login form that listens 
for a button click event, retrieves user input, compares 
it with a list of users, and stores the user's id if a match is found
*/
import { fetchUsers, setCurrentUser } from "../data/TransientState.js"





// attach "click" event listener for Login button
document.addEventListener(
    "click",
    async (clickEvent) => {
        //Check if the login button is clicked
        if (clickEvent.target.id === "loginButton") {
            let username = document.getElementById("username").value
            let password = document.getElementById("password").value
            // Make sure password and username are filled out
            if (username.length > 0 && password.length > 0) {
                // Fetch users from API
                const users = await fetchUsers()

                // Check to see if username and password match
                const verifiedUser = users.find(user => user.email === username && user.password === password)
                
                // Authenticate user if their credentials are in database
                if (verifiedUser) {
                    // Set the verified user as the current user in transient state
                    setCurrentUser(verifiedUser)
                    // Broadcast a custom event that the state has changed so the browser can listen and update
                    const customEvent = new CustomEvent("stateChanged")
                    document.dispatchEvent(customEvent)
                } else {
                    window.alert("Invalid user credentials")
                }
            } else {
                window.alert("Please enter both a username and password")
            }
            
            
        }
    }
)

// export functin to build html for the login form as well as the log-in button itself
export const Login = () => {

    let htmlString = `
        <div class="loginHeader"><h1>Login to GiffyLube</h1></div>  
        <form id="loginForm">  
            <div class="Login">   
                <div class="Login__row Login__username">
                    <label class="Login--label">Username : </label>   
                    <input id="username" class="Login--input" type="text" placeholder="Enter Username" name="username" required>
                </div>  
                <div class="Login__row Login__password">
                    <label class="Login--label">Password : </label>
                    <input id="password" class="Login--input" type="password" placeholder="Enter Password" name="password" required>
                </div>   
                  
                <div class="Login__row Login__buttonRow">
                    <button id="loginButton" class="Login--btn"  type="button">Login</button>
                </div>   
      
            </div>   
        </form>
    `
    return htmlString
}