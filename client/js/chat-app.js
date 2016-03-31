(function(chat) {
  'use strict';

  var token;
  var name;

  window.chat.init(function recieveNewMessage(data){
    var messageLI = $('<li>')
      .append(postMessageText(data.message, data.username))
      .append($('<i>')
        .addClass("fa fa-user fa-3x"))
      .append(postMessageUser(data.username));
    $('#messages').find('ul')
      .append(messageLI);
  });

  function postMessageText(message, username){
      return $('<p>')
        .attr({time: Date.now()})
        .addClass('chatmessage')
        .text(message);
  }

  function postMessageUser(author){
      return $('<p>')
        .addClass('chatauthor')
        .text(author);
  }

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

  $('#login').on('submit', function usernameSubmit(event){
    event.preventDefault();
    getToken($('.username').val());
    chatScreenInit();
    var newList = $('<ul>')
      .addClass('messagelist');
    $('#messages')
      .append(newList);
  });

  function getToken(submittedUsername){
    $.ajax({
      type: 'POST',
      url: '/login',
      contentType: 'application/json',
      data: JSON.stringify({username: submittedUsername}),
      success: function storeUser(data){
        token = data.token;
        name = data.username;
      },
      error: function errorHandler(xhr){
        console.log(xhr);
      }
    });
  }

  function chatScreenInit(){
    $('#login').remove();
    $('#chat').css({display: 'block'});
  }

  window.chat = chat;

}(window.chat || {}));
