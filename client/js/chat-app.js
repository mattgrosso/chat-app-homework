(function(chat) {
  'use strict';
/**
 * This function will be triggered when a user enters a new message
 * It should run another function that will add the new message to the UI
 * @param  {[object]}   [This will recieve an object with two key-value pairs]
 */
  window.chat.init(function recieveNewMessage(data){
  });

  /**
   * This function should take in a string and post it to the UI as the message
   * @param  {[string]} message [the text of the message as a string]
   */
  function postMessageText(message){
  }

/**
 * This function should take in a string and post it to the UI as the username
 * @param  {[string]} message [the username of the person who entered the code]
 */
  function postMessageUser(username){
  }

/**
 * This funtion will recieve the input from the username input field and make an
 * ajax request using that username.
 * The ajax request will return their username and a token
 * Finally, it should remove the login prompt and pull up the UI for actual chatting.
 * @param  {[string]} username [username entered into the input field]
 */
  function usernameSubmit(username){
    
  }

/**
 * This function will make the request to ajax to retrieve the token.
 * @param  {[string]} username [username submitted in the input field]
 * @return {[string]}          [token]
 */
  function getToken(username){
  }

/**
 * This function just removes the username entry UI and replaces it with the chat UI
 */
  function chatScreenInit(){
  }

/**
 * This function takes in the input value on the message input and makes a POST
 * request to the server.
 * @param  {[string]} message [this it the value from the message input field]
 */
  function newMessage(message){
  }




  window.chat = chat;

}(window.chat || {}));
