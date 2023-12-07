document.body.style.margin = '0px';
document.body.style.height = '100vh';
document.body.style.backgroundColor = 'white';
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
 
let container = document.body.appendChild(document.createElement('div'));
container.style.height = '800px';
container.style.aspectRatio = '3/2';
container.style.maxHeight = '90%';
container.style.maxWidth = '95%'
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'space-evenly';
 
for (let i = 0; i < 2; i++){
    let player = container.appendChild(document.createElement('div'));
    let name = player.appendChild(document.createElement('div'));
    let points = player.appendChild(document.createElement('div'));
    let pointsContainer = points.appendChild(document.createElement('div'));
    let number = player.appendChild(document.createElement('div'));
    let numberContainer = number.appendChild(document.createElement('div'));
    
    player.id = `player${i}`;
    player.style.height = '80%';
    player.style.aspectRatio = '1/2';
    player.style.backgroundColor = 'lightgrey';
    player.style.display = 'flex';
    player.style.flexDirection = 'column';
    player.style.alignItems = 'center';
    player.style.justifyContent = 'space-around';
    
    name.id = `name${i}`;
    name.style.width = '90%';
    name.style.textAlign = 'center';
    name.style.fontSize = '5vmin';

    points.style.width = '90%';
    points.style.height = '20%';
    points.style.backgroundColor = 'lightblue';
    points.style.display = 'flex';
    points.style.alignItems = 'center';
    points.style.justifyContent = 'center';
    
    pointsContainer.id = `points${i}`
    pointsContainer.style.fontSize = '5vmin';
    pointsContainer.innerText = "0";
    
    number.style.width = '90%';
    number.style.aspectRatio = '1/1';
    number.style.borderRadius = '50%';
    number.style.backgroundColor = 'yellow';
    number.style.margin = '10% 0';
    number.style.display = 'flex';
    number.style.alignItems = 'center';
    number.style.justifyContent = 'center';
    
    numberContainer.id = `number${i}`
    numberContainer.style.fontSize = '5vmin';
    numberContainer.innerText = "0";
}
 
let generateContainer = document.getElementById('player0').insertAdjacentElement('afterend', document.createElement('div'));
let generate = generateContainer.appendChild(document.createElement('div'));
generateContainer.style.height = '20%';
generateContainer.style.aspectRatio = '3/2';
generateContainer.style.backgroundColor = 'limegreen';
generateContainer.style.display = 'flex';
generateContainer.style.alignItems = 'center';
generateContainer.style.justifyContent = 'center';
 
generate.innerText = "Generate";
generate.style.fontSize = '4vmin'
 
let points1 = 0, points2 = 0;
let number1 = 0, number2 = 0;
 
document.getElementById('name0').textContent = prompt("Enter your name:", "Player");
document.getElementById('name1').textContent = "Computer";
 
generateContainer.onclick = () => {
    document.getElementById('number0').innerText = number1 = Math.floor(Math.random() * 100);
    document.getElementById('number1').innerText = number2 = Math.floor(Math.random() * 100);
    if (number1 > number2)
        document.getElementById('points0').innerText = ++points1;
    else if (number1 < number2)
        document.getElementById('points1').innerText = ++points2;
    if (points1 == 3 || points2 == 3){
        alert(`${points1 == 3 ? document.getElementById("name0").textContent : "Computer"} has won`);
        points1 = points2 = 0;
        document.getElementById('points1').innerText = "0";
        document.getElementById('points0').innerText = "0";
    }
}