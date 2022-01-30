
let pCookie = document.cookie;

console.log(pCookie);
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



//code starts
//let playerId;
function getPlayer(playerName){
    axios.get(`http://localhost:8082/player/find/${playerName}`).then(function (response){
        console.log('player is is' + response.data.id);
        getGames(response.data.id);  
    });
}

//getPlayer(getCookie('playerView'));




let gameContainer = document.querySelector('#game-container');

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

const getGames = (id) => {
    axios.get(`http://localhost:8082/game/player/${id}`).then(function (response){
        game = response.data;
        console.log(game);
        displayGames(game);
    });
}

document.querySelector('#search').onclick = (e) => {
    e.preventDefault();
    document.cookie = `playerView=` + document.querySelector('#searchBox').value;
    window.location.reload();
    //window.location.replace(`http://localhost:8082/view.html`);
}


//getGames(playerId);

getPlayer(getCookie('playerView'));