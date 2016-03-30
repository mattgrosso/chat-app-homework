(function(chat) {
  'use strict';

  var name;
  var token;

 /**
 * This function will be triggered when the server sends a new message
 * It should run another function that will add the new message to the UI
 * @param  {[object]}   [This will recieve an object with two key-value pairs]
 */
  window.chat.init(function recieveNewMessage(data){
    console.log(data);
    var message = $('<li>').text(data.message);
    var username = $('<li>').text(data.username);
    $('#messages').find('ul')
      .append(message)
      .append(username);
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
  * This function takes in the input value on the message input and makes a POST
  * request to the server.
  * @param  {[string]} message [this it the value from the message input field]
  */
  $('#send-message').on('submit', function newMessage(event){
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/chat',
      contentType: 'application/json',
      headers: {authorization: token},
      data: JSON.stringify({message: $('.message').val()}),
      success: function storeUser(data){
      },
      error: function errorHandler(xhr){
        console.log(xhr);
      }
    });
    $('.message').val('');
  });

/**
 * This function will recieve the input from the username input field and make an
 * ajax request using that username.
 * The ajax request will return their username and a token
 * This function should take those values and return a UN and Token for future use.
 * Finally, it should remove the login prompt and pull up the UI for actual chatting.
 * @param  {[string]} username [username entered into the input field]
 */
  $('#login').on('submit', function usernameSubmit(event){
    event.preventDefault();
    getToken($('.username').val());
    chatScreenInit();
    var newList = $('<ul>');
    $('#messages')
      .append(newList);
  });

/**
 * This function will make the request to ajax to retrieve the token.
 * @param  {[string]} username [username submitted in the input field]
 * @return {[string]}          [token]
 */
  function getToken(enteredUsername){
    $.ajax({
      type: 'POST',
      url: '/login',
      contentType: 'application/json',
      data: JSON.stringify({username: enteredUsername}),
      success: function storeUser(data){
        console.log(data);
        newCreds(data);
      },
      error: function errorHandler(xhr){
        console.log(xhr);
      }
    });
  }

/**
 * This assigns values to the name and token variables
 * @param  {[object]} data [takes in an object and returns the values for the correct fields]
 */
  function newCreds(data){
    name = data.username;
    token = data.token;
  }

/**
 * This function just removes the username entry UI and replaces it with the chat UI
 */
  function chatScreenInit(){
    $('#login').remove();
    $('#chat').css({display: 'block'});
  }


  window.chat = chat;

}(window.chat || {}));
