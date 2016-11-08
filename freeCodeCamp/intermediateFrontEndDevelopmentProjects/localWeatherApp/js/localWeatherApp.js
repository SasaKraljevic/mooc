$(document).ready(function(){
    var city;
    var location;
    var lat;
    var lon;
    var photoRef;
    var tempC;
    var tempF;
/*
// get user location
$.get("http://ipinfo.io", function (response) {
    //$("#ip").html("IP: " + response.ip);
    city = response.city
    console.log("CITY: ",city);
    console.log("RESPONSE :", response);
    location = response.loc.split(",");
    var lat = (Math.round(location[0] * 100) / 100);
    var lon = (Math.round(location[1] * 100) / 100);
    lat = lat.toString();
    lon = lon.toString();
    console.log("LAT: ", lat);
    console.log("LON: ", lon);
    $("#city").html("Location: " + city + ", " + response.region);
    //$("#city2").html(JSON.stringify(response, null, 4));
}, "jsonp")
*/

// get user location
/*
// option 01: using city name to get weather later
$.getJSON('https://freegeoip.net/json/' , function(data) {
    console.log("DATA: ", data);
    var city = data.city;
    var country = data.country_name;
    $("#city").html(city + ", " + country);
    console.log(city);
    console.log(country);
*/
$("#fahrenheite").click(function() {
  //$("#temp").remove(html);
  $("#temp").html(tempF + " &#8457;"); 
  return false;
});
$("#celsius").click(function() {
  //$("#temp").remove(html);
  $("#temp").html(tempC + " &#8451;"); 
  return false;
});
// option 02: using latitude and longitude
$.getJSON('https://freegeoip.net/json/' , function(data) {
    console.log("DATA: ", data);
    lat = data.latitude;
    lon = data.longitude;
    city = data.city;
    $("#cityName").html(data.city + ", " + data.country_name);
    console.log(lat);
    console.log(lon);

// get weather json info
// APPID: 8c0fc22e3317a7404e6791d841e9f602
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139
$.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&APPID=8c0fc22e3317a7404e6791d841e9f602", function(val){
//$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=8c0fc22e3317a7404e6791d841e9f602&units=metric", function(val){
    console.log("--------------");
    console.log("VAL: ", val);
    console.log("CITY2: ", val.name);
    var weather = val.weather[0].main;
    var humidity = val.main.humidity + " &#37;";
    tempC = Math.floor(val.main.temp);
    tempF = Math.floor((tempC*1.8)+32); 
    var icon = val.weather[0].icon;
    var wind = val.wind.speed;
    var pressure = Math.floor(val.main.pressure) + " hPa";
     
    //$("#city").html("Location: " + val.name); 
    $("#temp").html(tempC + " &#8451;"); 
    $("#humidity").html(humidity); 
    $("#wind").html(wind + " m/s"); 
    $("#pressure").html(pressure);
    $("#weather").html(weather);
    $("#icon").attr("src", "http://openweathermap.org/img/w/"+icon+".png");
     
    

})

    // google api for city images
    // google apikey: AIzaSyDyFrSgv3HMm23BvZWe-w2po2yk3cHBLLM
    // google apikey: AIzaSyAzBVMc18bXcw7jR0B0qWM6aa3CmbtEU4g
var requestURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/textsearch/json?query="+city+"&key=AIzaSyCXPVripDPRjxgFo1okQjjrZjlAJBXKgUU&libraries=places";    
$.getJSON(requestURL, function(gPlace) {
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log("gPlace :", gPlace);
  var gPlaceResults = gPlace.results;
  console.log("gPlaceResults :", gPlaceResults); 
  photoRef = gPlaceResults[0].photos[0].photo_reference;
  console.log("photoRef :", photoRef);
  var photoUrl = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1800&photoreference="+photoRef+"&key=AIzaSyCXPVripDPRjxgFo1okQjjrZjlAJBXKgUU";
  $('.intro-header').css('background-image', 'url(' + photoUrl + ')');
})





});



});


