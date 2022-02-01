

var uName = document.querySelector('#userName');


document.querySelector('#login').onclick = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8082/player/find/${uName.value}`).then(function (response){
        let player = response.data.userName;
        console.log("this is the player: " + player);
        document.cookie = `playerMain=`+player;
        window.location.replace(`http://localhost:8082/index.html`);   
    });
}

let newUName = document.querySelector('#newUserName');
let newEmail = document.querySelector('#email');
let newPass = document.querySelector('#newPassword');
console.log(newPass);

document.querySelector('#signUp').onclick = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8082/player/add`,
    {
        "userName": newUName.value,
        "email": newEmail.value,
        "password": newPass.value
    }).then(function (response){
        console.log(response);
        document.cookie = `playerMain=` +newUName.value;
        window.location.replace(`http://localhost:8082/index.html`);
        
    });
}


