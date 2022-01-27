var uName = document.querySelector('#userName');


document.querySelector('#login').onclick = () => {
    axios.get(`http://localhost:8082/player/find/${uName.value}`).then(function (response){
        let player = response.data.userName;
        document.cookie = `${player}`;
        
        window.location.replace("http://localhost:8082/index.html");
        
    });
}
