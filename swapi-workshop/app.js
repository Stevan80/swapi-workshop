console.log("Working");

const personEl = document.querySelector(".person");
const shipEl = document.querySelector(".ship");

const peopleTableContainerEl = document.querySelector(".peopleTableContainer");
const shipsTableContainerEl = document.querySelector(".shipsTableContainer");


const personURL = "https://swapi.dev/api/people/?page=1";
const shipsURL = "https://swapi.dev/api/starships";


//PEOPLE

function fetchPerson(personURL) {
  fetch(personURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPersonList(peopleTableContainerEl, data);
    });
}

personEl.addEventListener("click",function(){
  fetchPerson(personURL);
})
function renderPersonList(containerEl, peopleData) {
    
  let tableHTML = "" 

  for (let people of peopleData.results) {
 
    tableHTML += `
    
    
    <tr>
        <td>${people.name}</td>
        <td>${people.height}</td>
        <td>${people.mass}</td>
        <td>${people.gender}</td>
        <td>${people.birth_year}</td>
        <td>${people.films.length}</td>
    </tr>

    
    `;
  }

  containerEl.innerHTML =
  `
  
  <section class="peopleTableContainer">
  <h1 class="peopleHeading">StarWars People</h1>
   <table class = "mainTable">
  <thead>
   <tr>
   
       <th>Name</th>
       <th>Height</th>
       <th>Mass</th>
       <th>Gender</th>
       <th>Birth Year</th>
       <th>Appearances</th>
   </tr>
  </thead>
  <tbody>${tableHTML}</tbody>
</table>
</section>
<button id="peoplePrevPage">PreviousPage</button>
<button id="peopleNextPage">NextPage</button>
`

const peoplePrevBtn = containerEl.querySelector("#peoplePrevPage")
const peopleNextBtn = containerEl.querySelector("#peopleNextPage")

if (!peopleData.previous) {
  peoplePrevBtn.disabled = true
 }

 if (!peopleData.next) {
  peopleNextBtn.disabled = true
}

peoplePrevBtn.addEventListener("click", function (){

  fetchPerson(peopleData.previous)
})
peopleNextBtn.addEventListener("click", function (){

fetchPerson(peopleData.next)
})

}


//SHIPS

function fetchShips(shipsURL) {
  fetch(shipsURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderShipsList(shipsTableContainerEl, data);
    });
}

shipEl.addEventListener("click",function(){
  fetchShips(shipsURL);
})

function renderShipsList(containerEl, starshipsData) {
  let tableHTML = "";

  for (let starships of starshipsData.results) {

    tableHTML += `
    
    
    <tr>
        <td>${starships.name}</td>
        <td>${starships.model}</td>
        <td>${starships.manufacturer}</td>
        <td>${starships.cost_in_credits}</td>
        <td>${starships.passengers}</td>
        <td>${starships.starship_class}</td>
    </tr>

    
    `;
  }

  containerEl.innerHTML =
   `
 
 <section class="shipsTableContainer">
<h1 class="peopleHeading">StarWars StarShips</h1>
   <table class = "mainTable">
  <thead>
   <tr>
       <th>Name</th>
       <th>Model</th>
       <th>Manufacturer</th>
       <th>Cost</th>
       <th>People Capacity</th>
       <th>Class</th>
   </tr>
  </thead>
  <tbody>${tableHTML}</tbody>
</table>
</section>
<button id="starshipsPrevPage">PreviousPage</button>
<button id="starshipsNextPage">NextPage</button>`

const starshipsPrevBtn = containerEl.querySelector("#starshipsPrevPage")
const starshipsNextBtn = containerEl.querySelector("#starshipsNextPage")

if (!starshipsData.previous) {
  starshipsPrevBtn.disabled = true
 }

 if (!starshipsData.next) {
  starshipsNextBtn.disabled = true
}

starshipsPrevBtn.addEventListener("click", function (){
  fetchShips(starshipsData.previous)
  
})
starshipsNextBtn.addEventListener("click", function (){
fetchShips(starshipsData.next)

})

}