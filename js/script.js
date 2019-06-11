const object = [
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

let randomCity;
let score = 0;
let costBox = 0;
let scoreLevel = 0;



/**
 * Our all constants
 * **/

const BOXES = $('.grey_box'),
    WORDS_CONTAINER = $('#words'),
    MAIN_PHOTO = $('#cube');

let LEVEL_CONFIG;


function newGame() {
    costBox = 0;
    BOXES.show();
    // нужно выбрать рандомно элемент
    randomCity = getRandomArbitrary(0, object.length - 1);
    // rewrite out object with current city
    LEVEL_CONFIG = object[randomCity];

    // нужно выбрать рандомно число бокса от 1-9
    let randomBoxNumber = getRandomArbitrary(1, 9);

    boxHide(randomBoxNumber);

    console.log(randomCity, LEVEL_CONFIG);
    console.log(randomBoxNumber);

    scoreLevel = LEVEL_CONFIG['count'];
    initWords();
    bagBG();
    costBoxLvl();
}

function bagBG() {
    MAIN_PHOTO.css('background-image', `url(${LEVEL_CONFIG['image']})`);
}

newGame();
keyWord();


function getRandomArbitrary(min, max) {
    const count = Math.random() * (max - min) + min;
    return Math.floor(count);
}

// рандомно прячет один квадрат
function boxHide(hideRandomBox) {
    BOXES.eq(hideRandomBox - 1).hide();
}

BOXES.on("click", function () {
    if ( costBoxLvl() === true ) {
        alert("You don't more open");
        costBox -= 100;
        updateCounts();
    } else {
        $(this).hide();
    }
});

function costBoxLvl() {
    costBox += 100;
    updateCounts();
    return costBox > scoreLevel;
}

function updateCounts() {
    $('.score').text(score);
    $('.costBox').text(costBox);
    $('.scoreLevel').text(scoreLevel);
}


//эта функция разбивает слово на буквы
function initWords() {
    const word = object[randomCity]['name'].split('');
    generateWordsContainer(word);
}

function generateWordsContainer(wordArr) {
    WORDS_CONTAINER.empty();
    wordArr.forEach(() => WORDS_CONTAINER.append('<div class="letter"></div>'));
    console.log(wordArr);
}

//функция создания динамически div для количества букв в нашем слове

function refreshGame() {
    newGame();
    console.log('refresh game');
}

function keyWord() {
   
}

$(document).on( 'keydown', function(event) {
    let test = event.key;

    funWord(test)

    let letterBoxMas = [];

    for (let i = 'A'; i <= 'z'; i++) {
        
        letterBoxMas.add(i);
    }

});

function funWord(getTest) {

    $('.letter').text(getTest)
}