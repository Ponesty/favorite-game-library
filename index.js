//const { default: axios } = require("axios");


show1 = document.querySelector('#test');

document.querySelector('#get').onclick = () => {
    axios.get(`http://localhost:8082/game/all`).then(function (response){
        let show2 =document.createElement('div');
        let game = response.data[0];
        //show2.append(game.description);
        console.log(game.description);
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
    axios.post(`http://localhost:8082/game/add`,
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
