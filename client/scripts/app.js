$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages/',
  type: 'GET',
  contentType: 'application/json',

  success: function (data) {
    console.log('chatterbox: Request Sent');
    console.log(data);
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send request', data);
  }
});
