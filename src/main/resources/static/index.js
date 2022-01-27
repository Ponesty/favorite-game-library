//const { default: axios } = require("axios");

//let elements = document.cookie.split('=');
console.log(document.cookie);
let player2 = document.cookie;
var playerObject;

axios.get(`http://localhost:8082/player/find/${player2}`).then(function (response){
    playerObject = response.data;
    console.log(playerObject);
});

document.querySelector('#get').onclick = () => {
    axios.get(`http://localhost:8082/game/player/${playerObject.id}`).then(function (response){
        let show2 =document.createElement('div');
        let game = response.data[0];
        //show2.append(game.description);
        console.log(game);
        //show1.appendChild(show2);
        let arr = Object.values(game);
        document.getElementById('test').innerHTML = arr;
    });

}

qTitle = document.querySelector('#title');
qImage = document.querySelector('#imageURL');
qDescription = document.querySelector('#description1');
qVideo = document.querySelector('#videoURL');

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
