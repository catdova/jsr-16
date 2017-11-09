// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPXp4P7U545xVtdI1NM5NHhwHETOFaxhM",
    authDomain: "jsr-practice-class-16.firebaseapp.com",
    databaseURL: "https://jsr-practice-class-16.firebaseio.com",
    projectId: "jsr-practice-class-16",
    storageBucket: "jsr-practice-class-16.appspot.com",
    messagingSenderId: "597196518404"
  };
  firebase.initializeApp(config);

$(document).ready(function() {
  var database = firebase.database();


  // CREATE

$('#message-form').submit(function(event) {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault();
    $('.message-board').empty();
    // grab user message input
    var message = $('#message').val();



      // clear message input (for UX purposes)
    $('#message').val('');

    // create a section for messages data in your db
    var messagesReference = database.ref('messages');

    // use the set method to save data to the messages
    messagesReference.push({
      message: message,
      votes: 0
    });
  });

$('h1Form').submit(function(event) {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault();
    // grab user message input
    var newArtist = $('#new-artist').val();



      // clear message input (for UX purposes)
    $('#new-artist').val('');

    // create a section for messages data in your db
    var artistReference = database.ref('artists');

    // use the set method to save data to the messages
    artistReference.push({
      artist: artist,
    });
  });


getFanMessages();
  // READ
  function getFanMessages() {

    // use reference to app database to listen for changes in messages data
    // hint: use something referring to 'value'
    var messagesReference = database.ref('messages');

    messagesReference.on('value', 
      function(results){

        var allMessages = results.val();
        var $messageBoard = $('.message-board');

        for (var comment in allMessages) {
          var $li = $('<li></li>');
          $li.html(allMessages[comment].message);

          $messageBoard.append($li);
        }

      });

      // iterate through results coming from database call; messages

        // bind the results to the DOM
  }

  //UPDATE
  var $h1Form = $('<form>Better Artist: <input id="newartist" type="text" name="artist"></form>');

  var artistReference = database.ref('artist');


  $('.navbar-header').append($h1Form);

});