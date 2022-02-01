
let pCookie = document.cookie;

console.log(pCookie);

//Function that gets the player name we want from the correct cookie.
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
  console.log(getCookie('playerView'));




//Getting the player from the server by passing the username. Then passing the player id to the getGames function.
function getPlayer(playerName){
    axios.get(`http://localhost:8082/player/find/${playerName}`).then(function (response){
        console.log('player is is' + response.data.id);
        getGames(response.data.id);  
    });
}




//container in html where games will be displayed.
let gameContainer = document.querySelector('#game-container');


//each individual game is getting it's own card that can display their information on screen.
function createGameCard(game){
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');

    gameCard.innerHTML =`<h3 class="title">${game.title}</h3>
    <img alt='Game image' src=${game.imageURL} class="game-image"/>
    <p class="game-description">${game.description}</p>
    <iframe
    src=${game.videoURL}>
    </iframe>
    `

    gameContainer.appendChild(gameCard);
}


//Taken the games array from player id and creating a box for each game by passing them into the createGameCard function.
const displayGames = (game) => {
    gameContainer.innerHTML = ``;
    for(let i =0; i< game.length; i++){
        createGameCard(game[i]);

    }
}

//Getting the games that are connected to the player id. Then passing the games to display games function.
const getGames = (id) => {
    axios.get(`http://localhost:8082/game/player/${id}`).then(function (response){
        game = response.data;
        console.log(game);
        displayGames(game);
    });
}

document.querySelector('#homeBtn').onclick = () => {window.location.href = 'http://localhost:8082/index.html'}

//Taking the players name and refreshing player.html so we can see the new players games.
document.querySelector('#search').onclick = (e) => {
    e.preventDefault();
    document.cookie = `playerView=` + document.querySelector('#searchBox').value;
    window.location.reload();
    //window.location.replace(`http://localhost:8082/view.html`);
}


//Sign out button. Removing all cookies
document.querySelector('#signOut').onclick = (e) => {
    e.preventDefault();
    //document.cookie ='expires=Thu, 01 Jan 1970 00:00:00 UTC';
    window.location.replace(`http://localhost:8082/player.html`);
}


//Getting player by id by passing the player name from cookie and displaying players games.
getPlayer(getCookie('playerView'));