import { create } from "domain";


function submitData(userName, userEmail){
    
    let formData = {
        name: userName,
        email: userEmail
    }
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        createElementAndAppendToBody(object.id);
    })
    .catch(function(error){
        createElementAndAppendToBody(error.message);
    })
}
function createElementAndAppendToBody(innerHTML){
    let newNode = document.createElement('p');
    newNode.innerHTML = innerHTML;
    document.querySelector("body").appendChild(newNode);
}