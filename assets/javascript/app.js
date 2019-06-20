let lengthInput = document.getElementById('length-input');
let breadthInput = document.getElementById('breadth-input');
let depthInput = document.getElementById('depth-input');
let dwtResult = document.getElementById('dwt-result');
let calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let draft = parseInt(depthInput.value) - 2;
    let displacement = parseInt(lengthInput.value) * parseInt(breadthInput.value) * draft * 0.9 / 3.28 / 3.28 / 3.28;
    let lightShipWeight = displacement * 0.3;
    let dwtOfShip = displacement - lightShipWeight
    console.log(parseInt(lengthInput.value))
    dwtResult.textContent = dwtOfShip + "tons";
    console.log(1);
})