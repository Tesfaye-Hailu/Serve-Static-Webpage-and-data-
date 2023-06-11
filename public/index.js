let ulElement = document.querySelector('.ul-foodList');
let randomButton = document.getElementById('random-button');

fetch('http://localhost:3000/data')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((food) => {
      let myLi = document.createElement('li');
      myLi.textContent = food.name;
      ulElement.appendChild(myLi);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

ulElement.innerHTML = '<li>I am an LI tag!</li>';

