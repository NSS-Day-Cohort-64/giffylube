/* 
a basic implementation of a login form that listens 
for a button click event, retrieves user input, compares 
it with a list of users, and stores the user's id if a match is found
*/

// build html for the button as well as the log-in button itself

// imports getUsers function from ./data/TransientState.js
// declares LoginForm function
// attach "click" event listener for Login button
// exports LoginForm function

export const LoginForm = () => {

    let htmlString = `
        <div class="loginHeader"><h1>Login Form</h1></div>  
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