$(document).ready(function() {

  var baseUrl = 'https://crossorigin.me/https://api.twitch.tv/kraken/';
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

  for(var i = 0; i < users.length; i++) {
    // Temporary object
    var obj = {};


      $.getJSON(baseUrl + 'streams/' + users[i] + '?callback=?&client_id=' + clientId, function(streamData) {
        if (streamData.stream) {
          var userName = streamData.stream.channel.display_name;
          var userGame = streamData.stream.channel.game;
          var userLogo = streamData.stream.channel.logo;
          var userBanner = streamData.stream.preview.medium;
          var userStatus = streamData.stream.channel.status;
          var userUrl = streamData.stream.channel.url;
          var userViewers = streamData.stream.viewers;
          console.log("ONLINE :", streamData);
          console.log("NAME :", userName);
          console.log("GAME :", userGame);
          console.log("LOGO :", userLogo);
          console.log("BANNER :", userBanner);
          console.log("STATUS :", userStatus);
          console.log("URL :", userUrl);
          console.log("VIEWERS :", userViewers);

          onlineUsers.push(obj);

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
    $('.status').html(userStatus);
    $('img').attr('src', userLogo);
    $('a').attr('href', userUrl);

        }




    });

  }


});
