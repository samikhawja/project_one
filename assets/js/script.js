// Get the modal
var modal = document.getElementById("myModal");

// Get modal quote element
var transQuote = document.getElementById("transQuote")

// Get kanyequote display
var kanyeQuote = document.getElementById("kanyeQuote")

//Get refresh button
var refreshBtn = document.getElementById("refresh");

//Get translate button
var transBtn = document.getElementById("transBtn");

//Get KanyeYoda
var kanyeYoda = document.getElementById("kanyeYoda");
var kanyeYoda2 = document.getElementById("kanyeYoda2");

//Grab Form Element
var mainForm = document.getElementById("form");

// Generate and display kanye quote
function getKanyeQuote(){
  fetch("https://api.kanye.rest")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      
      kanyeQuote.value = data.quote
      console.log("quote is: " + data.quote)
      

  })
}
// Calls generate kanyequote function when page load.
getKanyeQuote()

// function linked to translate button, organizes parameters (selection of language and formats text) then calls translate function
function start(){
  console.log(kanyeQuote.value)

  // Prevents function from activating without button click
  var form = document.getElementById("form")
  form.addEventListener("click", function(event){event.preventDefault()})

  // Get selected language option
  var language = document.getElementById("language").value
  
  // Format kanye quote into url format
  quoteArray=kanyeQuote.value.split(" ")
  var textInput = ""
  for (i=0;i<quoteArray.length-1;i++){
    textInput = textInput.concat(quoteArray[i]+"%20")

  }
  textInput = textInput.concat(quoteArray[quoteArray.length-1])
  console.log(textInput)

  // Calls tranlate after organizing parameters
  translate(language, textInput)
}

// Translates the text, then displays modal, and starts speech
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
      speak(data.contents.translated)
      
    })
}

// Hides modal by clicking on window and cancels speech
window.onclick = (function(event){
  if (event.target == modal){
    modal.style.display="none"
    speechSynthesis.cancel()
  }

})

// The speech function, first formats the text then calls speechsynthesis to speak
function speak(message){

  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "\'","\"", " "]
  var speechText = ""    
  for (i=0;i<message.length;i++){
        if (alphabet.includes(message.charAt(i))){
          speechText = speechText + message.charAt(i)
        }
        else{
          speechText = speechText + message.charAt(i)+" "
        }

      }
      console.log(speechText)
      speechSynthesis.speak(new SpeechSynthesisUtterance(speechText))



}
//Button function to make Kanye Yoda shake head

//Horizontal for Refresh
refreshBtn.onclick = function(){
  $(kanyeYoda).addClass("shake shake-horizontally");
  $(kanyeYoda2).addClass("shake shake-horizontally");
}

// // //Vertical for Translate
// transBtn.onclick = function(){
//   $(kanyeYoda).addClass("shake shake-vertically");
//   $(kanyeYoda2).addClass("shake shake-vertically");
// }

//Dyanmic header background========
//Colors for Header
const colors = [
  '#201F41',
  '#422D53',
  '#ADFF2F'
]
//Function for Dynamic Header
function createSquares(){
  const header = document.querySelector('header');
  const square = document.createElement('span');

  var size = Math.random() * 50;

  square.style.width = 20 + size + 'px';
  square.style.height = 20 + size + 'px';

  square.style.left = Math.random() * innerHeight + 'px';
  square.style.left = Math.random() * innerWidth + 'px';

  const bg = colors[Math.floor(Math.random() * colors.length)];
  square.style.background = bg;

  header.appendChild(square);

  setTimeout(() =>{
    square.remove()
  },5000)
}
setInterval(createSquares, 150)
// =============
// Moment.js

setInterval(myTimer, 0);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML= d.toLocaleTimeString();
  timeSlots();
}
