var uName = document.querySelector('#userName');
var playerId;

document.querySelector('#login').onclick = () => {
    axios.get(`http://localhost:8082/player/find/${uName.value}`).then(function (response){
        playerId = response.data.id;
        window.location.replace("http://127.0.0.1:5500/index.html");
        
    });
}
