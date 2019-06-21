let lengthInput = document.getElementById('length-input');
let breadthInput = document.getElementById('breadth-input');
let depthInput = document.getElementById('depth-input');
let dwtResult = document.getElementById('dwt-result');
let calculateBtn = document.getElementById('calculate');
let shipType = document.querySelectorAll('input[name=ship-type]');
let companyObjective = document.getElementById('company-objective');
let submitBtn = document.getElementById('submit');
let backgroundImageArr = ["assets/images/IMG_7480.jpeg", "assets/images/IMG_0046.jpg", "assets/images/IMG_0047.jpg"]
let count = 0;
// function changeBackground () {
//     console.log(backgroundImageArr[count]);
//     console.log(count);
//     setInterval(function() {
//         companyObjective.style.backgroundImage = `url(${backgroundImageArr[count]})`;
//         count++;
//     if(count === backgroundImageArr.length) {
//         count = 0;
//     }
//     },3000);
    
//     console.log(count);
// };
// changeBackground();


function dwtInM(draft ,cb ,wtFactor) {
    dwtResult.textContent = '';
    let newTable = document.createElement('table');
    let newHeaderTr = document.createElement('tr');
    let newDraftTh = document.createElement('th');
    let newDwtTh = document.createElement('th');
    newDraftTh.textContent = 'Draft';
    newDwtTh.textContent = 'Deadweight(tons)';
    newHeaderTr.appendChild(newDraftTh);
    newHeaderTr.appendChild(newDwtTh);
    newTable.appendChild(newHeaderTr);
    newTable.className = 'result-table';

    for(let i = 1.5; i <= draft; i += 0.5) {
        displacement = lengthInput.value * breadthInput.value * i * cb;
        let lightShipWeight = lengthInput.value * breadthInput.value * draft * cb * 0.3;
        console.log(lightShipWeight);
        let newtr = document.createElement('tr');
        let newDraft = document.createElement('td');
        let newDwt = document.createElement('td');
        newDraft.textContent = i + ' m';
        let dwt = displacement-lightShipWeight;
        newDwt.textContent = dwt.toFixed(0) + ' tons';
        newtr.appendChild(newDraft);
        newtr.appendChild(newDwt);
        newTable.appendChild(newtr);
    }
    dwtResult.appendChild(newTable);
};

function dwtInFt(draft ,cb ,wtFactor) {
    dwtResult.textContent = '';
    let newTable = document.createElement('table');
    let newHeaderTr = document.createElement('tr');
    let newDraftTh = document.createElement('th');
    let newDwtTh = document.createElement('th');
    newDraftTh.textContent = 'Draft';
    newDwtTh.textContent = 'Deadweight(tons)';
    newHeaderTr.appendChild(newDraftTh);
    newHeaderTr.appendChild(newDwtTh);
    newTable.appendChild(newHeaderTr);
    newTable.className = 'result-table';

    for(let i = 3; i <= draft; i += 1) {
        displacement = lengthInput.value * breadthInput.value * i * cb / 3.28 / 3.28 / 3.28;
        let lightShipWeight = lengthInput.value * breadthInput.value * draft * cb / 3.28 / 3.28 / 3.28 * wtFactor;
        console.log(lightShipWeight);
        let newtr = document.createElement('tr');
        let newDraft = document.createElement('td');
        let newDwt = document.createElement('td');
        newDraft.textContent = i + ' ft';
        let dwt = displacement-lightShipWeight
        newDwt.textContent = dwt.toFixed(0) + ' tons';
        newtr.appendChild(newDraft);
        newtr.appendChild(newDwt);
        newTable.appendChild(newtr);
    }
    dwtResult.appendChild(newTable);
    
};

calculateBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let cb;
    let draft;
    let wtFactor;
    for(let i = 0; i < shipType.length; i++) {
        if(shipType[i].checked) {
            switch(shipType[i].value) {
                case "tugboat":
                    wtFactor = 0.35;
                    cb = 0.7;
                    if(lengthInput.value < 70) {
                        draft = depthInput.value - 0.609;
                        dwtInM(draft ,cb ,wtFactor);
                    } else {
                        draft = depthInput.value - 2;
                        dwtInFt(draft ,cb ,wtFactor);
                    };
                    break;
                case "sand-suction-boat":
                    wtFactor = 0.2;
                    cb = 0.7;
                    if(lengthInput.value < 50) {
                        draft = depthInput.value - 0.609;
                        dwtInM(draft ,cb ,wtFactor)
                    } else {
                        draft = depthInput.value - 2;
                        dwtInFt(draft ,cb ,wtFactor);
                    };
                    break;
                case "barge":
                    wtFactor = 0.155;
                    cb = 0.9;
                    if(lengthInput.value < 110 && breadthInput.value < 35) {
                        draft = depthInput.value - 0.609;
                        dwtInM(draft ,cb ,wtFactor)
                    } else {
                        draft = depthInput.value - 2;
                        dwtInFt(draft ,cb ,wtFactor);
                    };
                    break;
                case "landing-craft":
                    wtFactor = 0.27;
                    cb = 0.85;
                    if(lengthInput.value < 120 && breadthInput.value < 40) {
                        draft = depthInput.value - 0.9;
                        dwtInM(draft ,cb ,wtFactor)
                    } else {
                        draft = depthInput.value - 3;
                        dwtInFt(draft ,cb ,wtFactor);
                    };
                    break;
            };
        };
    };
});

submitBtn.addEventListener('click', function() {
    if(document.getElementById('username-input').value === "umi" && document.getElementById('password-input').value === "umi" ) {
        console.log(document.getElementById('username-input').value);
        document.getElementById('calc-dwt').style.display = 'block';
    } else {
        alert('Enter the correct username and password!!');
    }
});