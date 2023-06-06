


let ulElement = document.querySelector('.ul-foodList');

let randomButton = document.getElementById('random-button');


fetch('http://localhost:3000/data').then((res) => {
    res.json().then((data) => {

            data.forEach((foodString) => {
            let myLi = document.createElement('li');
            myLi.textContent = foodString.name;
            ulElement.appendChild(myLi)
        })
    })
})



ulElement.innerHTML = "<li>I am a LI tag!</li>"