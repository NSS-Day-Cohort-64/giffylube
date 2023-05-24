// imports getMessages and getUsers functions from ./data/TransientState.js
import { getMessages, getUsers } from './data/TransientState.js';

// declare and export MessageList function that generates an HTML string representing a list of messages
export function MessageList() {
  const messages = getMessages();
  const users = getUsers();

  const htmlStrings = messages.map(function (message) {
    const { userId, text } = message;

    const htmlString = `
      <div class="message">
        <span class="user">${users[userId]}</span>
        <p class="message-text">${text}</p>
      </div>
    `;

    return htmlString;
  });

  const resultString = htmlStrings.join('');

  return resultString;
}