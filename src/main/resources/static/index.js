//const { default: axios } = require("axios");

//Function is getting specific cookie with username from player.html
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

const gameContainer = document.querySelector('#game-container');
//The Players username in the cookie. Player username is in player2.
let player2 = getCookie('playerMain');
var playerObject;
let game;




//Function sending a delete game request to server.
const deleteGame = (id) => {
    axios.delete(`http://localhost:8082/game/delete/${id}`).then(res =>{
        window.location.reload();
    });
}

//Creating the game card for each game sent in.
function createGameCard(game){
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');

    gameCard.innerHTML =`<h3 class="title">${game.title}</h3>
    <img alt='Game image' src=${game.imageURL} class="game-image"/>
    <p class="game-description">${game.description}</p>
    <iframe 
    src=${game.videoURL}>
    </iframe>
    <button id= 'deleteBtn' onclick='deleteGame(${game.id})'>Remove Game</button>
    `

    gameContainer.appendChild(gameCard);
}


//Taking each game and sending them to the createGameCard function to be organized and displayed.
const displayGames = (game) => {
    gameContainer.innerHTML = ``;
    for(let i =0; i< game.length; i++){
        createGameCard(game[i]);

    }
}



//Getting games from the logged in players game list. Currently using the get button.
const getGames = (id) => {
    axios.get(`http://localhost:8082/game/player/${id}`).then(function (response){
        game = response.data;
        console.log(game);
        displayGames(game);

    });

}

qTitle = document.querySelector('#title');
qImage = document.querySelector('#imageURL');
qDescription = document.querySelector('#description1');
qVideo = document.querySelector('#videoURL');

//Adding game to the logged in player game list.
document.querySelector('#post').onclick = () => {
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

//Taking player name in search bar and connecting it to a cookie. Then we go to view.html so we can see the player games.
document.querySelector('#search').onclick = (e) => {
    e.preventDefault();
    document.cookie = `playerView=` + document.querySelector('#searchBox').value;
    window.location.href=`http://localhost:8082/view.html`;
}

//Home button just reloads page
document.querySelector('#homeBtn').onclick = () => {window.location.reload();}

//Sign out button. Removing all cookies
document.querySelector('#signOut').onclick = (e) => {
    e.preventDefault();
    //document.cookie ='expires=Thu, 01 Jan 1970 00:00:00 UTC';
    window.location.replace(`http://localhost:8082/player.html`);
}


//Finding the logged in player from database so we can use the player id to get their games and saved their created games.
axios.get(`http://localhost:8082/player/find/${player2}`).then(function (response){
    playerObject = response.data;
    console.log(playerObject);
    getGames(playerObject.id);
});

