// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("transBtn");

// When the user clicks on the button, open the modal
document.getElementById("transBtn").onclick = function(event) {
  event.preventDefault()
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







































///////////////
//Kanye API
function getKanyeQuote () {
  var kanyeURL = 'https://api.kanye.rest/'
$.ajax({
  url: kanyeURL,
  method: "GET"
}).then(function(response){
  console.log("this is the kanye quote: ", response);
  $('#kanyeQuote').text(response.quote);
})
}
getKanyeQuote();
console.log("did it work? ", getKanyeQuote);