// Get the modal
var modal = document.getElementById("myModal");

// Get modal quote element
var transQuote = document.getElementById("transQuote")

// Get kanyequote display
var kanyeQuote = document.getElementById("kanyeQuote")

// Generate and display kanye quote
function getKanyeQuote(){
  fetch("https://api.kanye.rest")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      
      kanyeQuote.textContent= data.quote
      console.log("quote is: " + data.quote)
      

  })
}
// Calls generate kanyequote function when page load.
getKanyeQuote()

// function linked to translate button, organizes parameters then calls translate function
function start(){

  var form = document.getElementById("form")
  form.addEventListener("submit", function(event){event.preventDefault()})

  var language = document.getElementById("language").value
  
  quoteArray=kanyeQuote.textContent.split(" ")
  var textInput = ""
  for (i=0;i<quoteArray.length-1;i++){
    textInput = textInput.concat(quoteArray[i]+"%20")

  }
  textInput = textInput.concat(quoteArray[quoteArray.length-1])
  console.log(textInput)

  translate(language, textInput)

}


function translate(language, textInput){
  var url = "https://api.funtranslations.com/translate/"+language+".json?text="+textInput+"&api_key=ERi5YlYgaVXbRvTtr08K9AeF"
  fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data)
      transQuote.textContent = data.contents.translated
      modal.style.display="inline"
      console.log(data.contents.translated)

    })
}




































// function getKanyeQuote () {
//   var kanyeURL = 'https://api.kanye.rest/'
// $.ajax({
//   url: kanyeURL,
//   method: "GET"
// }).then(function(response){
//   console.log("this is the kanye quote: ", response);
//   $('#kanyeQuote').text(response.quote);
// })
// }
// getKanyeQuote();
// console.log("did it work? ", getKanyeQuote);
// >>>>>>> 5b08ceb417e6ba058843b962ade4fef9c2016171
