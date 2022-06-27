// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
    });
   
    let form = document.querySelector("form");
   let list = document.getElementById("faultyItems");
   form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilot = document.querySelector("input[name=pilotName]").value;
    //let pilotInput = pilot.value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    //let copilotInput = copilot.value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    //let fuelLevelInput = fuelLevel.value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    //let cargoLevelInput = cargoLevel.value;
    //console.log(fuelLevel);
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    
   });


       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      
       let selectPlanet = pickPlanet(planetsReturned);
       addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.imageUrl);
       
       
   });