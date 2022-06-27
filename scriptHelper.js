// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");

    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
    if (testInput ==="") {
     return "Empty";
    }else if (isNaN(Number(testInput))) {
     return "Not a Number";
    }else if (isNaN(Number(testInput)) === false) {
     return"Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // console.log(validateInput(fuelLevel));
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
     alert("All fields are required!");

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
     alert("Make sure to enter valid information for each Field!");
    } else {
        fuelLevel = Number(fuelLevel);
        cargoLevel = Number(cargoLevel);
     list.style.visibility = "visible";
     document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
     document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
     let launchStatus = document.getElementById("launchStatus");
     
     if (fuelLevel < 10000 && cargoLevel <= 10000) {
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
     } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
     } else if (fuelLevel < 10000 && cargoLevel > 10000) {
         document.getElementById("fuelStatus").innerHTMLL = "Fuel level too low for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
     } else {
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
         launchStatus.style.color = "green";
     }
    }
 }

async function myFetch() {
    let planetsReturned = [];

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
    .then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randoInt = Math.floor(Math.random() * (planets.length));
    return planets[randoInt];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
