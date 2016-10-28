$(document).ready(function(){
    var city;
// get user location
$.get("http://ipinfo.io", function (response) {
    //$("#ip").html("IP: " + response.ip);
    city = response.city;
    console.log(response);
    $("#city").html("Location: " + response.city + ", " + response.region);
    //$("#city2").html(JSON.stringify(response, null, 4));
}, "jsonp")
   
// get weather json info
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=8c0fc22e3317a7404e6791d841e9f602&units=metric", function(val){
      
    console.log("--------------");
    console.log(val);
    var weather = val.weather[0].main;
    var tempC = Math.floor(val.main.temp);
    var tempF = Math.floor((tempC*1.8)+32); 
    var icon = val.weather[0].icon;
    var wind = val.wind.speed;
     
    $("#temp").html(tempC + " &#8451;"); 
    $("#humidity").html(weather); 
    $("#wind").html(wind + " km/h"); 
     
    // $("#temperature").html(html3);

})




});


