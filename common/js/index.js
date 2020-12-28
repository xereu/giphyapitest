$(function() {

});
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=nintendo&api_key=gdwjphWDU038gRbOZBeOX0oNWQZEdPGM&limit=5");
xhr.done(function(data)
{ 
   console.log(data);
});