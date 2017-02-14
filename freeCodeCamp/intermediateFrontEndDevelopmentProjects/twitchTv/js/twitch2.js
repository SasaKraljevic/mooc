//$(document).ready(function() {

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

  var twitchLogo = 'https://news.bitcoin.com/wp-content/uploads/2016/09/Twitch-TV-logo-300x300.png';
  
  // get stream data
  function getStreamData(users) {


  users.forEach(function(user) {
    var userName;
    var userFollowers;
    var userGame;
    var userLogo;
    var userStatus;
    var userUrl;
    
  $.getJSON(baseUrl + 'streams/' + user + '?callback=?&client_id=' + clientId, function(streamData) {

    //console.log("streamData :", streamData);

    // get channels data
    userName = streamData.stream.channel.display_name;
    //console.log("userName :", userName);
    userFollowers = streamData.stream.channel.followers;
    //console.log("userFollowers :", userFollowers); 
    userGame = streamData.stream.channel.game;
    //console.log("userGame :", userGame);
    userLogo = streamData.stream.channel.logo;
    //console.log("userLogo :", userLogo);
    userStatus = streamData.stream.channel.status;
    //console.log("userStatus :", userStatus);
    userUrl = streamData.stream.channel.url;
    //console.log("userUrl :", userUrl);
    //console.log("channelData :", channelData);

    console.log("------------------");
    console.log("userName :", userName);
    console.log("userFollowers :", userFollowers); 
    console.log("userGame :", userGame);
    console.log("userLogo :", userLogo);
    console.log("userStatus :", userStatus);
    console.log("userUrl :", userUrl);
  }); // end of users.forEach
  });
}

getStreamData(users);

/*
function createHtml() {
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
}*/
//}); // end of docuent.ready
