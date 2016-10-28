$(document).ready(function(){
//creating the necessary cards for links
var createResults = function(arr){
  for(var i in arr){
    $(".results").append(
      '<a href=\'https://en.wikipedia.org/?\
      curid=' + arr[i].pageid+ '\' target="_blank">\
       <div class=\'card-container\'>\
       <div class=\'card-text\'>\
       <span class=\'card-title\'>'+arr[i].title+'\
       </span>'+ arr[i].extract+ '</div></div></a>'
    );
  }
};


//function for finding the the wikipedia content
var findData = function(){
  $("#wikiSearch").blur();
  var url='https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exintro=1&explaintext=1&gsrnamespace=0&exlimit=max&gsrwhat=text&gsrlimit=10&gsrsearch=';
  var term;
  var term= $("#wikiSearch").val();
  if(!term=='' &&
     !$('.results').html==''){
    $(".results").html("");
  }
  
  url+=term;
  console.log(url);
  
  $.ajax( {
    url: url,
    dataType: 'jsonp',
    type: 'GET',
    headers: { 'Wikipedia-Search-Result-App': '1.0' },
    success: function(data) {
      $(".ion-load-c").hide();
      if(term!='' && jQuery.isEmptyObject(data.query))
        $(".results").html(
          "<div class=card-error>\
          <div class=card-text>\
        <h2 style='color:#ffa31a;'>Sorry. No results found!</h2></div></div>");
      createResults(data.query.pages);      
    },
    error:function(e){
      console.log(e);
      $(".results").html('<h2 style="color:#ffa31a;">Sorry! An error occured. Please try again</h2>');
    } 
    });
};

//find data and display content
$("#searchButton").click(findData);
$("#wikiSearch").on('keyup', function(e){
  console.log(e.which);
  if(e.which=='13'){
    findData();
  }
});


});