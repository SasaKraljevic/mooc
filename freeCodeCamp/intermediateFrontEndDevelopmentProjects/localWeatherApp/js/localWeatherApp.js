$(document).ready(function(){
    var city;
    var location;
    var lat;
    var lon;
    var photoRef;
    var tempC;
    var tempF;

// get user location by latitude and longitude
$.getJSON('https://freegeoip.net/json/' , function(data) {
    console.log("DATA: ", data);
    lat = data.latitude;
    lon = data.longitude;
    city = data.city;
    $("#cityName").html(data.city + ", " + data.country_name);

// get weather json info using openweathermap API
$.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&APPID=8c0fc22e3317a7404e6791d841e9f602", function(val){
    var weather = val.weather[0].main;
    var humidity = val.main.humidity + " &#37;";
    tempC = Math.floor(val.main.temp);
    tempF = Math.floor((tempC*1.8)+32); 
    var icon = val.weather[0].icon;
    var wind = val.wind.speed;
    var pressure = Math.floor(val.main.pressure) + " hPa";
     
    $("#temp").html(tempC + " &#8451;"); 
    $("#humidity").html(humidity); 
    $("#wind").html(wind + " m/s"); 
    $("#pressure").html(pressure);
    $("#weather").html(weather);
    $("#icon").attr("src", "http://openweathermap.org/img/w/"+icon+".png");
})

// get city images using google places API
var requestURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/textsearch/json?query="+city+"&key=AIzaSyCXPVripDPRjxgFo1okQjjrZjlAJBXKgUU&libraries=places";    
$.getJSON(requestURL, function(gPlace) {
    var gPlaceResults = gPlace.results;
    photoRef = gPlaceResults[0].photos[0].photo_reference;
    var photoUrl = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1800&photoreference="+photoRef+"&key=AIzaSyCXPVripDPRjxgFo1okQjjrZjlAJBXKgUU";
    $('.intro-header').css('background-image', 'url(' + photoUrl + ')');
})

});

// change from celsius to fahrenheite
$("#fahrenheite").click(function() {
    $("#temp").html(tempF + " &#8457;"); 
    return false;
});
$("#celsius").click(function() {
    $("#temp").html(tempC + " &#8451;"); 
    return false;
});

});


