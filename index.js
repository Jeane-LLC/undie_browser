var queryParams = new URLSearchParams(window.location.search);
var passwordInput = document.getElementById("passwordInput");
var submitPasswordButton = document.getElementById("submitPasswordButton");

submitPasswordButton.addEventListener("click", onSubmitPasswordbuttonClick);

function onSubmitPasswordButtonClick(event){
    queryParams.set("p",passwordInput.value);
    history.replaceState(null, null, queryParams.toString());
    //validatePassword();
}

async function attemptToEnterRoom(password){
    fetch('https://api.undie.party/connect',{p:password}).then(response => response.json()).then(data => console.log(data));
}

function validatePassword(){
    var password = queryParams["p"];
    if(password != undefined){
	attemptToEnterRoom(password);
    }
}

validatePassword();
