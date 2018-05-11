var word1 = "code" 
var word2 = "break"
var word3 = "door" 
var word4 = "friend" 
var word5 = "smile" 
var word6 = "create" 
var word7 = "fast" 
var word8 = "chair" 

var hint1 = "Decipher"
var hint2 = "___ a Leg"
var hint3 = "Opposite of Foe"
var hint4 = "Knob"
var hint5 = "Teeth"
var hint6 = "Opposite of Destroy"
var hint7 = "Slow"
var hint8 = "Sit"


var randomWord= ""
var randomHint= ""

// function genWord () {
   var words= [word1, word2, word3, word4, word5, word6, word7, word8]
   var hints=[hint1, hint2, hint3, hint4, hint5, hint6, hint7, hint8 ]
   var randI=Math.floor(Math.random() * words.length)
   randomWord =(words[randI])
   randomHint= (hints[randI])

 // }

 console.log(randomWord)



// Alphabet Box


var wrapper = document.createElement('div')
wrapper.style.width = "40%"
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


// var buttons = function () {
// 	myButtons = document.getElementById('buttons')
// 	letters = document.createElement('ul');

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
		// alpha.style.gridColumnStart = '2'
		// alpha.style.gridColumnEnd = '3'
		// alpha.style.gridRowStart = '2'
		// alpha.style.gridRowEnd = '3'
		wrapper.appendChild(alpha)

		var buttons = document.getElementsByClassName('a')
		buttons[i].addEventListener('click', function(event){
        console.log(event.target.innerHTML)
		})
	}




// console.log(rand)

//Word Generator - red box


var wordGen = document.createElement('button')
	wordGen.style.width = '20%'
   	wordGen.style.border = '2px solid blue'
   	wordGen.style.textAlign = 'center'
   	wordGen.style.height = "100px"
   	wordGen.style.backgroundColor = 'red'
   	wordGen.innerHTML = "word generator"
   	wordGen.style.position = "relative"
   	wordGen.style.left = "1100px"
   	wordGen.style.bottom = "200px"
   	var page = document.getElementsByTagName('body')[0];
   	page.appendChild(wordGen)
	
	wordGen.addEventListener('click', function(){
 	 wordBox.push(randomWord[i] + randomHint[i])

})


var wordBox = document.createElement('div')
	wordBox.style.width = "25%"
	wordBox.style.margin = '0 auto'
	wordBox.style.border = "2px solid orange"
	wordBox.style.backgroundColor = "lightgreen"
	wordBox.style.height = "200px"
	wordBox.style.position = 'relative'
	// wrapper3.style.left = "50px"
   wordBox.innerHTML = randomWord
   wordBox.innerHTML = randomHint
	wordBox.style.bottom = "200px"
	// wrapper2.style.bottom = "200px"
	document.body.appendChild(wordBox)




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









// generator.addEventListener()('click', function() {

// })


// document.onkeydown = function(event) {
//     var key_press = String.fromCharCode(event.keyCode);
//    document.getElementById('wordBox').innerHTML = key_press;
 
// }