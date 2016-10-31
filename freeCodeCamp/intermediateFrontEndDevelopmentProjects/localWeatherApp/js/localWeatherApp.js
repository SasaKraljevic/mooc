$(document).ready(function(){
    //var city;
    var location;
    //var lat;
    //var lon;
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
$.getJSON('https://freegeoip.net/json/' , function(data) {
    console.log(data);
    var city = data.city;
    var country = data.country_name
    $("#city").html(city + ", " + country);
    console.log(city);
    console.log(country);

// get weather json info
$.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=8c0fc22e3317a7404e6791d841e9f602", function(val){
//$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=8c0fc22e3317a7404e6791d841e9f602&units=metric", function(val){
    console.log("--------------");
    console.log("VAL: ", val);
    console.log("CITY2: ", val.name);
    var weather = val.weather[0].main;
    var humidity = val.main.humidity + " &#37;";
    var tempC = Math.floor(val.main.temp) + " &#8451;";
    var tempF = Math.floor((tempC*1.8)+32); 
    var icon = val.weather[0].icon;
    var wind = val.wind.speed;
    var pressure = Math.floor(val.main.pressure) + " hPa";
     
    //$("#city").html("Location: " + val.name); 
    $("#temp").html(tempC); 
    $("#humidity").html(humidity); 
    $("#wind").html(wind + " m/s"); 
    $("#pressure").html(pressure);
    $("#weather").html(weather);
    $("#icon").attr("src", "http://openweathermap.org/img/w/"+icon+".png");
     
    // $("#temperature").html(html3);

})
});


});


