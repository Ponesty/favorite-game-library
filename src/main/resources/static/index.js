//const { default: axios } = require("axios");

//let elements = document.cookie.split('=');
console.log(document.cookie);
const gameContainer = document.querySelector('#game-container');
let player2 = document.cookie;
var playerObject;
let game;

function createGameCard(game){
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');

    gameCard.innerHTML =`<h3 class="title">${game.title}</h3>
    <img alt='Game image' src=${game.imageURL} class="game-image"/>
    <p class="game-description">${game.description}</p>
    <iframe width="420" height="315"
    src=${game.videoURL}>
    </iframe>
    `

    gameContainer.appendChild(gameCard);
}



const displayGames = (game) => {
    gameContainer.innerHTML = ``;
    for(let i =0; i< game.length; i++){
        createGameCard(game[i]);

    }
}


axios.get(`http://localhost:8082/player/find/${player2}`).then(function (response){
    playerObject = response.data;
    console.log(playerObject);
});

document.querySelector('#get').onclick = () => {//playerObject.id in place of 1
    axios.get(`http://localhost:8082/game/player/${playerObject.id}`).then(function (response){
        //let show2 =document.createElement('div');
        game = response.data;
        console.log(game);
        displayGames(game);
        //let arr = Object.values(game);
        //document.getElementById('test').innerHTML = arr;
    });

}

qTitle = document.querySelector('#title');
qImage = document.querySelector('#imageURL');
qDescription = document.querySelector('#description1');
qVideo = document.querySelector('#videoURL');

document.querySelector('#post').onclick = () => {//playerObject.id in place of 1
    axios.post(`http://localhost:8082/game/${playerObject.id}/add`,
    {
        "title": qTitle.value,
        "imageURL": qImage.value,
        "description": qDescription.value,
        "videoURL": qVideo.value
    }).then(function (response) {
        qTitle.value ="";
        qImage.value="";
        qDescription.value ="";
        qVideo.value ="";
    });



}
