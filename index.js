var queryParams = new URLSearchParams(window.location.search);

async function attemptToEnterRoom(password){
    fetch('https://api.undie.party/connect',{p:password}).then(response => response.json()).then(data => console.log(data));
}

function validatePassword(){
    var password = queryParams["p"];
    if(password != undefined && Number.isInteger(password)){
	submitPasswordButton.value = password;
	attemptToEnterRoom(password);
    }
}




validatePassword();
