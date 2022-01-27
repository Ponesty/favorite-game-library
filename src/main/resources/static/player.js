var uName = document.querySelector('#userName');


document.querySelector('#login').onclick = () => {
    axios.get(`http://localhost:8082/player/find/${uName.value}`).then(function (response){
        let player = response.data.userName;
        document.cookie = `${player}`;
        
        window.location.replace("http://localhost:8082/index.html");
        
    });
}

let newUName = document.querySelector('#newUserName');
let newEmail = document.querySelector('#email');
let newPass = document.querySelector('#newPassword');

document.querySelector('#signUp').onclick = () => {
    axios.post(`http://localhost:8082/player/add`,
    {
        "userName": newUName.value,
        "email": newEmail.value,
        "password": newPass.value
    }).then(function(response){
        document.cookie = `${newUName.value}`;
        newUName.value="";
        newEmail.value="";
        newPass.value="";

        window.location.href = "http://localhost:8082/index.html";
    });
}
