
// *******************************
 //Word and Hint Function



var myInterval, dashWord;
wordArray = []
hintsArray = []

function Word (word,hint){
  var word = wordArray.push(word)
  var hint = hintsArray.push(hint)
}

var one = new Word ("code", "Decipher") 
var two = new Word ("break", "___ a Leg")
var three = new Word ("door", "Knob" )
var four = new Word ("friend", "Opposite of Foe")
var five = new Word ("smile", "Teeth")
var six = new Word ("create", "Opposite of Destroy") 
var seven = new Word ("fast", "Slow")
var eight = new Word ("chair", "Sit")

//Used Letters Container
var usedLetters = document.getElementsByClassName("usedLetters")


//Create Random Function
function random () {
    return (Math.floor(Math.random() * wordArray.length));
}

var randomNum = random()


// Create Split Word Function
var splitWord = wordArray[randomNum].split('')
   // console.log(splitWord)
var currentWord = wordArray[randomNum].split('')


// Create StringDash Function
function stringDash(splitWord){
  for (let i = 0; i<splitWord.length; i++) {
    splitWord.splice(wordArray.indexOf(wordArray[i]), 1, '_');
  }
  return splitWord.join (" ");
}
 


// Alphabet Box


var wrapper = document.createElement('div')
wrapper.style.width = "29%"
wrapper.style.margin = '0 auto'
wrapper.style.border = "2px solid red"
// wrapper.style.display = "grid"
// wrapper.style.gridTemplateColumns = "auto auto auto"
wrapper.style.backgroundColor = "lightblue"
wrapper.style.borderRadius = "25px", "25px"
wrapper.style.padding = "10px"
wrapper.style.height = "200px"
wrapper.style.position = "relative"
wrapper.style.bottom = "150px"
// wrapper.style.top = "0px"
document.body.appendChild(wrapper)


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var wrongArray = []
  
  for (i = 0; i < 26; i++){
    var alpha = document.createElement('div')
    alpha.style.width = '40px'
    alpha.style.border = '2px solid red'
    alpha.style.textAlign = 'center'
    alpha.style.display = 'inline-block'
    alpha.style.margin = '5px'
    alpha.style.borderRadius = "25px", "25px"

    alpha.classList.add('a')
    // alpha.className = 'a'
    alpha.innerHTML = alphabet[i]
    wrapper.appendChild(alpha)

    var buttons = document.getElementsByClassName('a')
    buttons[i].addEventListener('click', function(event){
      console.log(event.target.innerHTML)
        for (var i = 0; i < currentWord.length; i++)
          if (event.target.innerHTML === currentWord[i]) {
              splitWord.splice(i, 1, currentWord[i])
              wordBox.innerHTML = splitWord.join(" ")
              checkWord()

          } 
      usedLetters[0].innerHTML += event.target.innerHTML;

    })
      //Comparing Split Word to Current Word = Player Wins!


  }


// console.log(rand)

//Word Generator - red box

var wordGen = document.createElement('button')
  wordGen.style.width = '20%'
    wordGen.style.border = '2px solid blue'
    wordGen.style.textAlign = 'center'
    wordGen.style.height = "50px"
    wordGen.style.backgroundColor = 'gold'
    wordGen.style.borderRadius = "25px", "25px"
    wordGen.innerHTML = "Word Generator"
    wordGen.style.position = "relative"
    wordGen.style.left = "1100px"
    wordGen.style.bottom = "500px"
    wordGen.style.fontSize = "20px"
    var page = document.getElementsByTagName('body')[0];
    page.appendChild(wordGen)

   // wordBox.push(randomWord[i] + randomHint[i])
  

//Hint Generator 


var hintGen = document.createElement('button')
    hintGen.style.width = '20%'
    hintGen.style.border = '2px solid blue'
    hintGen.style.textAlign = 'center'
    hintGen.style.height = "50px"
    hintGen.style.backgroundColor = 'orange'
    hintGen.style.borderRadius = "25px", "25px"
    hintGen.innerHTML = "Need A Hint?"
    hintGen.style.position = "relative"
    hintGen.style.left = "765px"
    hintGen.style.bottom = "400px"
    hintGen.style.fontSize = "20px"
    var page = document.getElementsByTagName('body')[0];
    page.appendChild(hintGen)



//WORDBOX - CONTAINER

var wordBox = document.createElement('div')
  wordBox.style.width = "30%"
  wordBox.style.margin = '0 auto'
  wordBox.style.border = "2px solid orange"
  // wordBox.style.backgroundColor = "lightblue"
  wordBox.style.height = "200px"
  wordBox.style.position = 'relative'
  // wrapper3.style.left = "50px"
  wordBox.style.borderRadius = "25px", "25px"
  wordBox.style.bottom = "700px"
  wordBox.style.display = "block"
  wordBox.style.fontSize = "0px"
  wordBox.style.textAlign = "center"
  wordBox.style.paddingTop = "50px"
  // wrapper2.style.bottom = "200px"
  document.body.appendChild(wordBox)

  //WORD GENERATOR BUTTON FUNCTIONALITY FOR WORDBOX//

  wordGen.addEventListener('click', function(){
    randomNum = random()
    // Create Split Word Function
    splitWord = wordArray[randomNum].split('')
     // console.log(splitWord)
    currentWord = wordArray[randomNum].split('')
    wordBox.style.fontSize = "30px"
    dashWord = stringDash(splitWord)
    wordBox.innerHTML = dashWord

    //Make Hint Invisible//
    hintBox.style.visibility = "hidden"

    //Reset Letters in Guessed Letters Box//
    usedLetters[0].innerHTML = ""


})



 // NEW HINT BOX
var hintBox = document.createElement('div')
  // hintBox.style.width = "30%"
  hintBox.style.margin = "0 auto"
  
  // hintBox.style.backgroundColor = "lightgreen"
  hintBox.style.height = "50px"
  hintBox.style.position = 'relative'
  hintBox.style.bottom = "800px"
  hintBox.style.textAlign = "center"
  var page = document.getElementsByTagName('body')[0];
  page.appendChild(hintBox)

 hintGen.addEventListener('click',function(){
  hintBox.style.fontSize = "30px"
  hintBox.innerHTML = hintsArray[randomNum];
  hintBox.style.visibility = "visible"
  hintBox.style.border = "2px solid purple"
  hintBox.style.width = "20%"
  hintBox.style.borderStyle = "dashed"
  hintBox.style.borderRadius = "25px", "25px"

})





var myInterval;
//Timer 
// var existingIntervalId = 0;
wordGen.addEventListener('click', function () {
    clearInterval(myInterval)
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');

    startTimer(twoMinutes, display);

    //Start the Timer
});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    
        myInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer < 30) {
          time.style.backgroundColor = "red"
        }
        if (timer < 0) {
            stopTimer()
        } 
        --timer
    } ,1000);

  }

  function stopTimer () {
    clearInterval (myInterval) 
    alert('Game is Over...You Lose')
    setTimeout(function(){
      window.location.reload();
    }, 1000)
  }

  function checkWord(){
    console.log(dashWord)
    if (splitWord.join("") === currentWord.join('')){
      setTimeout(function() {
        alert ("You win! Congratulations!")
        window.location.reload();
      }, 1000)
    }
  }

// setTimeout(() => alert("Game Over"), 0);
//               alert("Game Over");









// wordBox()

// 	hint()

// 	timer()

// 	badLetter()





// Create container for remaining non-guessed letters

// var remainingLetters = word.length;

// while(remaininLetters > 0){
// 	//Progress of game
// }





