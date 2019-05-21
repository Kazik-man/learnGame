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

let costBox = 0;
let score = 0;
let scoreLevel = object[randomCity]['count'];

function newGame() {
    $('.grey_box').show();
    console.log(object.length);
    // нужно выбрать рандомно элемент
    let randomCity = getRandomArbitrary(0, object.length - 1);

    // нужно выбрать рандомно число бокса от 1-9
    let randomBoxNumber = getRandomArbitrary(1, 9);

    boxHide(randomBoxNumber);

    console.log(randomCity, object[randomCity]);
    console.log(randomBoxNumber);
}


newGame();
costBoxLvl();



function getRandomArbitrary(min, max) {
    const count = Math.random() * (max - min) + min;
    
    return Math.floor(count);
}


function boxHide(hideRandomBox) {
    $('.grey_box').eq(hideRandomBox-1).hide();
}

 $('.grey_box').on("click" function() {
     costBoxLvl();
});

function costBoxLvl() {
    costBox = costBox + 100;
    if(costBox > scoreLevel) {
        alert('Game Over');
    }
}

$('.score').text(score);
$('.scoreLevel').text(scoreLevel);
$('.costBox').text(costBox);
