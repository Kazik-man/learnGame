const objectMas = [
  {
    "image": "./img/kiev.jpg",
    "name": "Kiev",
    "count": "400"
  },
  {
    "image": "./img/china.jpg",
    "name": "China",
    "count": "500"
  },
  {
    "image": "./img/france.jpg",
    "name": "France",
    "count": "600"
  },
  {
    "image": "./img/georgia.jpg",
    "name": "Georgia",
    "count": "700"
  },
  {
    "image": "./img/ny.jpg",
    "name": "America",
    "count": "500"
  },
  {
    "image": "./img/praga.jpg",
    "name": "Prague",
    "count": "400"
  },
  {
    "image": "./img/Rome.jpg",
    "name": "Rome",
    "count": "400"
  },
  {
    "image": "./img/russia.jpg",
    "name": "Russia",
    "count": "600"
  },
  {
    "image": "./img/Stambule.jpg",
    "name": "Stambule",
    "count": "700"
  },
  ]

let countScore = 0;
let COUNT_LEVEL = 500;
let COUNT_BOX = 100;

const containerWords =document.getElementById('words');
const bgZona = $('#BG_game');

let corentGameState;
let hz = [];

function createNewLevel() {
	$('.miniBox').show();
// берет случайный элемент из массива городов
	const randomIndex = getRandomArbitrary(0, objectMas.length - 1);

	// случайное число от 1 до 9 
  const randomEmptyBox = getRandomArbitrary(1, 9);
  console.log(randomIndex, objectMas[randomIndex]);
  console.log('randomEmptyBox',randomEmptyBox);

  // обьект случайного города
  corentGameState = objectMas[randomIndex];
  bgZona.css("background-image", `url(${corentGameState.image})`);

  //  удаляет случайно выбранный элемент
  deleteBox(randomEmptyBox);
		
		// create list name
  loadWords(corentGameState.name);
  hz = []
}


function initGame() {
	createNewLevel();
	updateStatus(COUNT_LEVEL, COUNT_BOX);
	nextLevel();
	// keyCode();
}

function getRandomArbitrary(min, max) {
 return Math.floor(Math.random() * (max - min) + min);
}

initGame();

$(document).on('keyup', function(event) {
	console.log(event.key)
   // "france".includes("w") => boolean
	if (corentGameState.name.includes(event.key)) {
		// open letter

		// ["u", "a"]
		// hz.push(event.code)
		// ["u", "a", "i"]


		hz.push(event.key)	
	    
	    loadWords(corentGameState.name);
		
	} else {
		// reduce score
		COUNT_LEVEL -= 50
		updateStatus(COUNT_LEVEL, COUNT_BOX);
	}

})

$('.miniBox').click(function(e) {
	const can = count();
	if ( can ) {
		$(this).hide();
	}
	updateStatus(COUNT_LEVEL, COUNT_BOX);
});

function count() {
	console.log(COUNT_LEVEL, COUNT_BOX);
	if (COUNT_LEVEL >= COUNT_BOX) {
		COUNT_LEVEL = COUNT_LEVEL - COUNT_BOX;
		COUNT_BOX = COUNT_BOX + 100;
		console.log('score_level', COUNT_BOX);
		return true;
	} 
	return false;
}

function buttonClick() {
	initGame();
}

function deleteBox(box) {
	$('.miniBox').eq(box).hide();
}

// две функции идентичны.
// function deleteBox(box) {
// 	console.log(box);
// 	let boxH = '#miniBox' + box;
// 	console.log(boxH);
// 	$(boxH).hide();
// }


// ПАРАМЕТРЫ ФУНКЦИИ!!!!!! ПОВТОРИТЬ!


function updateStatus(COUNT_LEVEL, COUNT_BOX) {
	$('#score').text(countScore);
    $('#score_level').text(COUNT_LEVEL);
    $('#cost_open_box').text(COUNT_BOX);
}

// word: france
// hz: nce

function loadWords(aaaaa) {
	$(containerWords).empty();
	
	aaaaa.split("").forEach(function(letter, index) {
		const el = document.createElement("div");
		el.className = 'words_item';

		if(!hz.includes(letter.toLowerCase())) {
			el.innerHTML = index + 1
		} else {
			el.innerHTML = letter
		}

		containerWords.appendChild(el)
	})
}



function nextLevel() {
	const letters = [corentGameState.name.split("")];
	console.log(letters);
}


function keyCode() {
	const letterInWord = letters;
	if( letterInWord.includes('a')) {
		return true;
	}
}





// function functionDel() {

// 	// удалить все внутри #words

// 	// в цикле внутри #words  создлать новые дивы
// 	// количество дивов приходит в функцию как параметр
// }

// function fun() {
// 	let words = getRandomArbitrary();
// 	let wordRandr = words;

// 	let answerArray = [];
// 	for( let i = 0; i < wordRandr.length; i++ ) {
// 		answerArray[i] = "_";
// 	}

// 	let remainingLetters = wordRandr.length;
// 	alert(answerArray.join(" "));
// }


// over(10,2);


// over(2,34);

// function over(count, max) {
// 	return count > max;
// }


// test({
// 	sex: 'man',
// 	age: '30',
// 	childeren: '1'
// });

// function test(data) {
// 	return data.age + data.childeren;
// }

// strange(['alex','andrew','yulia','olesya','stas','bogdan'], 4);

// function strange(data, i) {
// 	return data[i - 1]
// }