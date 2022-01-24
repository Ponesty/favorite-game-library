let uName = document.querySelector('#userName');

console.log(uName.value);
document.querySelector('#login').onclick = () => {
    axios.get(`http://localhost:8082/player/find/Ponesty`).then(function (response){
        let player = response.data;
        console.log(player);
        
    });
}