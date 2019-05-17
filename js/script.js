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
        "count": "850"
    },
    {
        "image": "./img/Rome.jpg",
        "name": "Rome",
        "count": "350"
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
    {
        "image": "./img/bel.jpg",
        "name": "Belarus",
        "count": "650"
    },
    {
        "image": "./img/braziliya.jpg",
        "name": "Brasilia",
        "count": "350"
    },
    {
        "image": "./img/bugatti.png",
        "name": "Bugatti",
        "count": "400"
    },
    {
        "image": "./img/California.jpg",
        "name": "California",
        "count": "750"
    },
    {
        "image": "./img/Dodge.jpg",
        "name": "Dodge",
        "count": "550"
    },
    {
        "image": "./img/fallout.jpg",
        "name": "fallout",
        "count": "900"
    },
    {
        "image": "./img/india.jpg",
        "name": "India",
        "count": "450"
    },
    {
        "image": "./img/karpaty.jpg",
        "name": "Karpaty",
        "count": "650"
    },
    {
        "image": "./img/krym.jpg",
        "name": "krym",
        "count": "350"
    },
    {
        "image": "./img/lada.jpg",
        "name": "lada",
        "count": "300"
    },
    {
        "image": "./img/lamborghini.jpg",
        "name": "lamborghini",
        "count": "500"
    },
    {
        "image": "./img/mario.jpg",
        "name": "mario",
        "count": "400"
    },
    {
        "image": "./img/phuket-thailand.jpg",
        "name": "Thailand",
        "count": "800"
    },
    {
        "image": "./img/shevrolet.jpg",
        "name": "shevrolet",
        "count": "550"
    },
    {
        "image": "./img/pacman.jpg",
        "name": "pacman",
        "count": "350"
    },
    {
        "image": "./img/tanks.jpg",
        "name": "tanks",
        "count": "450"
    },
    {
        "image": "./img/papay.jpg",
        "name": "Papay",
        "count": "500"
    },
    {
        "image": "./img/porsche.jpg",
        "name": "porsche",
        "count": "450"
    },
    {
        "image": "./img/matrix.jpg",
        "name": "matrix",
        "count": "600"
    },
    {
        "image": "./img/contra.jpg",
        "name": "contra",
        "count": "700"
    },
]

let COUNT_SCORE = 0;
let COUNT_LEVEL = 500;
let COUNT_BOX = 100;

const containerWords = document.getElementById('words');
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
    console.log('randomEmptyBox', randomEmptyBox);

    // обьект случайного города
    corentGameState = objectMas[randomIndex];
    objectMas.splice(randomIndex, 1);

    console.log(objectMas.length);
    if(objectMas.length === 0) {
      alert("You don't have attempts :-((");
      return;
    }

    bgZona.css("background-image", `url(${corentGameState.image})`);
    COUNT_LEVEL = corentGameState.count;
    COUNT_LEVEL = 100;
    //  удаляет случайно выбранный элемент
    deleteBox(randomEmptyBox);
    hz = [];
    // create list name
    loadWords(corentGameState.name);
}


function initGame() {
    createNewLevel();
    updateStatus();
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

initGame();


$(document).on('keyup', function (event) {
    const currentName = corentGameState.name.toLowerCase(),
        currentLetter = event.key.toLowerCase();
    console.log(currentName, currentLetter);
// "france".includes("w") => boolean
    if (currentName.includes(currentLetter)) {
// open letter

// ["u", "a"]
// hz.push(event.code)
// ["u", "a", "i"]


        hz.push(event.key);

        loadWords(corentGameState.name);
    } else {
// reduce score
        COUNT_LEVEL -= 50;
        if (COUNT_LEVEL < 0) {
            COUNT_LEVEL = 0;
            alert('You are loser!!!!');
            return;
        }
        updateStatus(COUNT_LEVEL, COUNT_BOX);
    }
});

// word: france
// hz: nce

function loadWords(name) {
    $(containerWords).empty();
    console.log(name.split(""));
    name.split("").forEach(function (letter, index) {
        console.log('letter', letter, 'index', index);
        const el = document.createElement("div");
        el.className = 'words_item';
        console.log('hz', hz, hz.includes(letter.toLowerCase()));
        if (!hz.includes(letter.toLowerCase())) {
            el.innerHTML = index + 1
        } else {
            el.innerHTML = letter
        }

        containerWords.appendChild(el);
    });
    checkWord();
}

function checkWord() {
    console.log(corentGameState.name.length, hz.length);
    if (corentGameState.name.length === hz.length) {
        alert('you are win :))))');
        COUNT_SCORE = Number(COUNT_SCORE) + Number(COUNT_LEVEL);
        createNewLevel();
        updateStatus();
    }
}


$('.miniBox').click(function (e) {
    const can = count();
    if (can) {
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


function updateStatus() {
    $('#score').text(COUNT_SCORE);
    $('#score_level').text(COUNT_LEVEL);
    $('#cost_open_box').text(COUNT_BOX);
}

