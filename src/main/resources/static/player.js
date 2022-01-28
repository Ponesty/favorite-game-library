

var uName = document.querySelector('#userName');

const mainPage = () => {
    window.location.replace(`http://localhost:8082/index.html`);
    // window.location.assign("http://localhost:8082/index.html");
}

document.querySelector('#login').onclick = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8082/player/find/${uName.value}`).then(function (response){
        let player = response.data.userName;
        document.cookie = `${player}`;
        mainPage();
        
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
        document.cookie = `${newUName.value}`;
        mainPage();
        window.location.replace(`http://localhost:8082/index.html`);
        
    });
}

//console.log(newUname.value);
document.querySelector('#replace').onclick = () => mainPage();
