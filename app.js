document.addEventListener('DOMContentLoaded', () =>{

    //card options
    const cardArray =[
        {
            name: "camera",
            img: 'images/camera-icon.png'
        },
        {
            name: "camera",
            img: 'images/camera-icon.png'
        },
        {
            name: "fish",
            img: 'images/fish-icon.png'
        },
        {
            name: "fish",
            img: 'images/fish-icon.png'
        },
        {
            name: "king",
            img: 'images/king-icon.png'
        },
        {
            name: "king",
            img: 'images/king-icon.png'
        },
        {
            name: "photo",
            img: 'images/photo-icon.png'
        },
        {
            name: "photo",
            img: 'images/photo-icon.png'
        },
        {
            name: "video",
            img: 'images/photo-video.png'
        },
        {
            name: "video",
            img: 'images/photo-video.png'
        },
        {
            name: "picture",
            img: 'images/picture-icon.png'
        },
        {
            name: "picture",
            img: 'images/picture-icon.png'
        }
    ]

    cardArray.sort(()=>0.5 - Math.random())
    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardChosenId = [];
    var cardsWon = [];
    var resultDisplay  = document.querySelector('#result');

//create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/black-icon.png');
            card.setAttribute('data_id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);

        }
    }

    //Check for match
    function checkForMatch() {
        console.log('checkForMatch')
        var cards = document.querySelectorAll('img');
        var cardOptionOne = cardChosenId[0];
        var cardOptionTwo = cardChosenId[1];

        if(cardsChosen[0]===cardsChosen[1]){
            cards[cardOptionOne].setAttribute('src', 'images/reel.png')
            cards[cardOptionTwo].setAttribute('src', 'images/reel.png')
            cardsWon.push(cardsChosen);
            alert("It's a match");
        }else {
            cards[cardOptionOne].setAttribute('src', 'images/black-icon.png')
            cards[cardOptionTwo].setAttribute('src', 'images/black-icon.png')
            alert('Sorry try again')
        }
        //reset the chosen arrau
        cardsChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations on winning the game';
        }
    }

    //flipCard
    function flipCard() {
        console.log('flipCard clicked');
        var cardId = this.getAttribute('data_id');
        cardsChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        //set the image
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500);
        }


    }

    createBoard();



})



