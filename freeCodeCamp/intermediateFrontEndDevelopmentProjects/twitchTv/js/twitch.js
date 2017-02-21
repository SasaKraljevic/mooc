const streamsUrl = 'https://api.twitch.tv/kraken/streams/';
const channelsUrl = 'https://api.twitch.tv/kraken/channels/';
const clientId = '?callback=?&client_id=k4y0o278wsctmzrems5r33iiw7m923v';
const users = [
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
const noLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/No_sign.svg/300px-No_sign.svg.png'

function getOfflineData() {
  $('#content').empty();
  users.forEach(function(user) {

  $.getJSON(streamsUrl + user + clientId).done(function(streamsData) {
    //console.log(streamsData);
    var userName;
    var userLogo;
    var userStatus;
    var userGame;
    var userUrl;
    var spanClass;
    var btnLabel;

    // get offline users
    if(streamsData.stream === null) {
      //console.log(streamsData);
      $.getJSON(channelsUrl + user + clientId).done(function(channelsData) {
        //console.log(channelsData);
        userUrl = channelsData.url;
        userLogo = channelsData.logo;
        if(userLogo === null || userLogo === undefined) {
          userLogo = noLogo;
        }
        userName = channelsData.display_name;
        if(userName === undefined) {
          userName = user;
        }
        userGame = channelsData.game;
        if(userGame === null || userGame === undefined) {
          userGame = 'NO GAME!!';
        }
        userStatus = channelsData.status;
        spanClass = 'label label-warning';
        btnLabel = 'Offline';
        if(userStatus === 404) {
          userStatus = channelsData.message;
          spanClass = 'label label-danger';
          btnLabel = 'Not Found';
        }
        //console.log(userStatus);
         $('#content').append('\
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">\
            <div class="thumbnail">\
              <a href="' + userUrl + '" target="_blank">\
                <img src="' + userLogo + '" alt="...">\
              </a>\
              <div class="caption">\
                <h3>' + userName + '</h3>\
                <h4>' + userGame + '</h4>\
                <p class="status">' + userStatus.substring(0,25) + ' ...' + '</p>\
                <span class="' + spanClass + '">' + btnLabel + '</span>\
              </div>\
            </div>\
          </div>'); 
      });
    }
  }); // end of getJSON
  }); // end of users.forEach
} // end of getOfflineData

function getOnlineData() {
  $('#content').empty();
  users.forEach(function(user) {
    $.getJSON(streamsUrl + user + clientId).done(function(streamsData) {
      console.log(streamsData.stream.channel);
      if(streamsData.stream !== null && streamsData.stream.channel !== false) {
        console.log(streamsData.stream);
        userName = streamsData.stream.channel.display_name;
        userGame = streamsData.stream.channel.game;
        userLogo = streamsData.stream.channel.logo;
        userUrl = streamsData.stream.channel.url;
        userStatus = streamsData.stream.channel.status;
        spanClass = 'label label-success';
            btnLabel = 'Online';
      }
    /*  else {
        userName = streamsData.stream.display_name;
        userGame = streamsData.stream.game;
        userLogo = streamsData.stream.logo;
        userStatus = streamsData.stream.status;
        spanClass = 'label label-success';
            btnLabel = 'Online';
      }*/
      $('#content').append('\
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">\
          <div class="thumbnail">\
            <a href="' + userUrl + '" target="_blank">\
              <img src="' + userLogo + '" alt="...">\
            </a>\
            <div class="caption">\
              <h3>' + userName + '</h3>\
              <h4>' + userGame + '</h4>\
              <p class="status">' + userStatus.substring(0,25) + ' ...' + '</p>\
              <span class="' + spanClass + '">' + btnLabel + '</span>\
            </div>\
          </div>\
        </div>');
    });
  });
} // end of getOnlineData