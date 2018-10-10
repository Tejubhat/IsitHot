document.addEventListener('DOMContentLoaded', () => {
 console.log('made it to event listener');
 // create a new XMLHTTPRequest object
  var request = new XMLHttpRequest ();

 // Call Dark Sky API for Seattle lat/lang
 request.open('GET', "https://api.darksky.net/forecast/1ea5f9dfb56a7a383479744875bcaf87/37.8267,-155.6659", true);

request.onload = () => {
 console.log("hello");
  //gather data from API call
  var data = JSON.parse(request.responseText);
  var contents = data ['currently'] ['temperature'];

 // edit id temp span to include data responseText
  document.querySelector('#temp').innerHTML = contents;

};

 // send request
 request.send();
});
