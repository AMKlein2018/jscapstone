
// *******************************
 //Word and Hint Function

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


//Create Random Function
function random () {
    return (Math.floor(Math.random() * wordArray.length));
}

var randomNum = random()


// Create Split Word Function
splitWord = (wordArray[randomNum].split(''))
   // console.log(splitWord)
splitWordCompare = (wordArray[randomNum].split(''))


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
wrapper.style.backgroundColor = "tan"
wrapper.style.padding = "10px"
wrapper.style.height = "200px"
wrapper.style.position = "relative"
wrapper.style.top = "350px"
document.body.appendChild(wrapper)


var alphabet = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


	for (i = 0; i < 26; i++){
		var alpha = document.createElement('div')
		alpha.style.width = '40px'
		alpha.style.border = '2px solid green'
		alpha.style.textAlign = 'center'
		alpha.style.display = 'inline-block'
		alpha.style.margin = '5px'
		alpha.classList.add('a')
		// alpha.className = 'a'
		alpha.innerHTML = alphabet[i]
		wrapper.appendChild(alpha)

		var buttons = document.getElementsByClassName('a')
		buttons[i].addEventListener('click', function(event){
        console.log(event.target.innerHTML)
		})
	}

// document.onkeydown = function(event) {
//     var key_press = String.fromCharCode(event.keyCode);
//    document.getElementById('wordBox').innerHTML = key_press;
 
// }


// console.log(rand)

//Word Generator - red box


var wordGen = document.createElement('button')
	wordGen.style.width = '20%'
   	wordGen.style.border = '2px solid blue'
   	wordGen.style.textAlign = 'center'
   	wordGen.style.height = "50px"
   	wordGen.style.backgroundColor = 'gold'
   	wordGen.innerHTML = "Word Generator"
   	wordGen.style.position = "relative"
   	wordGen.style.left = "1100px"
   	wordGen.style.bottom = "100px"
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
    hintGen.innerHTML = "Need A Hint?"
    hintGen.style.position = "relative"
    hintGen.style.left = "770px"
    hintGen.style.bottom = "0px"
    hintGen.style.fontSize = "20px"
    var page = document.getElementsByTagName('body')[0];
    page.appendChild(hintGen)



//WORDBOX - CONTAINER

var wordBox = document.createElement('div')
	wordBox.style.width = "30%"
	wordBox.style.margin = '0 auto'
	wordBox.style.border = "2px solid orange"
	wordBox.style.backgroundColor = "lightgreen"
	wordBox.style.height = "200px"
	wordBox.style.position = 'relative'
	// wrapper3.style.left = "50px"
	wordBox.style.bottom = "200px"
  wordBox.style.display = "block"
  wordBox.style.fontSize = "0px"
  wordBox.style.textAlign = "center"
  wordBox.style.paddingTop = "50px"
	// wrapper2.style.bottom = "200px"
	document.body.appendChild(wordBox)

  wordGen.addEventListener('click', function(){
  wordBox.style.fontSize = "30px"
  wordBox.innerHTML = stringDash(splitWord)
})
  hintGen.addEventListener('click',function(){
  wordBox.style.fontSize = "30px"
  wordBox.innerHTML = hintsArray[0]; 

})




//Timer 

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

  window.onload =function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};



//Pushing WORD and HINT into different arrays



// 	function pushList() { 
// 	for (i = 0; i < 16; i++){
// 		var answer = []
// 		var r = rand
// 		r.push(answer[i])
// 	}
// }
// console.log(pushList)








// Array Setup
// 	for (var i = 0; i < w.length, i++){
// 		answerArray[i] = "_";

// 	}




// wordBox()

// 	hint()

// 	timer()

// 	badLetter()





// Create container for remaining non-guessed letters

// var remainingLetters = word.length;

// while(remaininLetters > 0){
// 	//Progress of game
// }


// result = function () {
// 	wordBox = document.getElementById('wordBox')
// 	correct = document.createElement('ul');

// 	for (var i = 0; i <word.length; i++) {
// 		correct.setAttribute('')
// 	}
// }


