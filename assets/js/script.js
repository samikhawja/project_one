// Get the modal
var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("transBtn");

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// Activate KanyeQuote when clicked
// btn.addEventListener("click", function(){getKanyeQuote()})


function getKanyeQuote(){
  fetch("https://api.kanye.rest")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log("quote is: " + data.quote)
      modal.textContent= data.quote
      console.log("quote is: " + data.quote)
      quoteArray=data.quote.split(" ")
      var textInput = ""
      for (i=0;i<quoteArray.length-1;i++){
        textInput = textInput.concat(quoteArray[i]+"%20")

      }
      textInput = textInput.concat(quoteArray[quoteArray.length-1])
      console.log(textInput)

      
      
      translate("yoda", textInput)
      translate("dothraki", textInput)
      
  })
}

function translate(language, input){
  var url = "https://api.funtranslations.com/translate/"+language+".json?text="+input+"&api_key=ERi5YlYgaVXbRvTtr08K9AeF"
  fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data)
      modal.textContent = data.contents.translated
      console.log(data.contents.translated)

    })
}


getKanyeQuote()
































///////////////
//Kanye API
// function getKanyeQuote () {
// $.ajax({
//   url: kanyeURL,
//   method: "GET"
// }).then(function(response){
//   console.log("this is the kanye quote: ", response);
//   $('#kanyeQuote').text(response);
// })
// }
// getKanyeQuote();
// console.log("did it work? " + getKanyeQuote());


