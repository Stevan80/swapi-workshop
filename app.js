console.log("Working");

const personEl = document.querySelector(".person");
const shipEl = document.querySelector(".ship");

const personURL = "https://swapi.dev/api/people/?page=1";

function fetchPerson() {
  fetch(personURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPersonList(personEl, data);
    });
}
