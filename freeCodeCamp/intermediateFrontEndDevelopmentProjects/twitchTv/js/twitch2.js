$(document).ready(function() {

  var baseUrl = 'https://wind-bow.gomix.me/twitch-api/';
  var clientId = 'k4y0o278wsctmzrems5r33iiw7m923v';
  var users = [
        "ESL_SC2",
        "OgamingSC2",
        "cretetion",
        "freecodecamp",
        "storbeck",
        "habathcx",
        "RobotCaleb",
        "noobs2ninjas",
        "pink_sparkles",
        "comster404",
        "brunofin",
        "medrybw",
        "monster",
        "aces_tv",
        "loserfruit",
        "behkuhtv",
        "fakename",
        "food"
  ];
  var allUsers = [];
  var onlineUsers = [];
  var offlineUsers = [];

  var twitchLogo = 'https://news.bitcoin.com/wp-content/uploads/2016/09/Twitch-TV-logo-300x300.png';
      var userName;
      var userUrl;
      var userLogo;
      var userStatus;
  users.forEach(function(user) {

    $.getJSON(baseUrl + 'streams/' + user + '?callback=?&client_id=' + clientId, function(streamData) {
      // get self url and channel url
      // console.log("_LINKS :", streamData._links);
      // get stream data
      //console.log("NAME :", streamData.stream.channel.display_name);

      // check is offline?
//      if (streamData.stream === null) {
          //console.log("CHANNEL DATA :", channelData)
          userName = streamData.display_name; 
          //console.log("OFFLINE USERNAME :", channelData.display_name);
          userGame = streamData.game;
          //console.log("GAME :", channelData.game);
          //console.log("OFFLINE USERNAME LINK :", channelData.url);
          //console.log("OFFLINE USER LOGO :", channelData.logo);
          // status could be a null, so I need to put something instead
          //console.log("OFFLINE USER STATUS :", channelData.status);

  console.log("----------", streamData.stream.channel.display_name);
  $('#content').append('\
    <div class="col-sm-6 col-md-4">\
      <div class="thumbnail">\
        <a href="">\
          <img src="..." alt="...">\
        </a>\
        <div class="caption">\
          <h3></h3>\
          <h4></h4>\
          <p class="status">...</p>\
          <span class="label label-success">Online</span>\
        </div>\
      </div>\
    </div>');
      
    $('h3').html(userName);
    $('h4').html(userGame);   
   
    });

});

});
