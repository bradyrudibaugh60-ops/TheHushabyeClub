/* ======================================== */
/* THE HUSHABYE CLUB — SCRIPT.JS */
/* ======================================== */

console.log(
'Quiet Hour initialized.'
);

/* ======================================== */
/* STAR GENERATION */
/* ======================================== */

const starsContainer =
document.getElementById(
'stars'
);

if(starsContainer){

for(let i=0;i<140;i++){

const star =
document.createElement('div');

star.classList.add(
'star'
);

star.style.left =
Math.random()*100+'vw';

star.style.top =
Math.random()*100+'vh';

star.style.animationDelay =
Math.random()*5+'s';

star.style.opacity =
Math.random();

starsContainer.appendChild(
star
);

}

}

/* ======================================== */
/* VIDEO LINKS */
/* ======================================== */

const momoEpisode =
'https://www.youtube.com/embed/x83jTBFu4wQ';

const pipEpisode =
'https://www.youtube.com/embed/YOUR_PIP_VIDEO';

const restrictedEpisode =
'https://www.youtube.com/embed/YOUR_RESTRICTED_VIDEO';

/* ======================================== */
/* VIDEO SYSTEM */
/* ======================================== */

function openVideo(videoURL){

const popup =
document.getElementById(
'videoPopup'
);

const frame =
document.getElementById(
'videoFrame'
);

if(popup && frame){

popup.style.display =
'flex';

frame.src =
videoURL;

}

}

function closePopup(){

const popup =
document.getElementById(
'videoPopup'
);

const frame =
document.getElementById(
'videoFrame'
);

if(popup && frame){

popup.style.display =
'none';

frame.src='';

}

}

/* ======================================== */
/* RESTRICTED EPISODE PASSWORD */
/* ======================================== */

function openRestricted(){

const popup =
document.getElementById(
'passwordPopup'
);

if(popup){

popup.style.display =
'flex';

}

}

function checkPassword(){

const input =
document.getElementById(
'passwordInput'
);

if(!input)return;

const password =
input.value.trim();

if(password === 'STLS'){

openVideo(
restrictedEpisode
);

document.getElementById(
'passwordPopup'
).style.display='none';

}else{

alert(
'ACCESS DENIED'
);

}

}

/* ======================================== */
/* TV ADMIN ACCESS */
/* ======================================== */

function checkTVAdmin(){

const input =
document.getElementById(
'tvAdminPassword'
);

if(!input)return;

const password =
input.value.trim();

if(password === 'Lull'){

window.location.href =
'admin.html';

}else{

alert(
'ACCESS DENIED'
);

}

}

/* ======================================== */
/* FISHING GAME */
/* ======================================== */

const canvas =
document.getElementById(
'gameCanvas'
);

if(canvas){

const ctx =
canvas.getContext('2d');

let score = 0;

const basket = {

x:350,
y:390,

width:120,
height:35

};

const fish = [];

/* SPAWN */

function spawnFish(){

fish.push({

x:
Math.random()*760,

y:-20,

speed:
2 + Math.random()*2

});

}

setInterval(
spawnFish,
1000
);

/* MOUSE */

document.addEventListener(
'mousemove',
(e)=>{

const rect =
canvas.getBoundingClientRect();

basket.x =
e.clientX -
rect.left -
60;

}
);

/* BASKET */

function drawBasket(){

ctx.fillStyle =
'#ffd27f';

ctx.beginPath();

ctx.roundRect(

basket.x,
basket.y,

basket.width,
basket.height,

10

);

ctx.fill();

}

/* FISH */

function drawFish(f){

ctx.fillStyle =
'#7fe4ff';

/* BODY */

ctx.beginPath();

ctx.moveTo(
f.x - 25,
f.y
);

ctx.quadraticCurveTo(
f.x,
f.y - 18,
f.x + 25,
f.y
);

ctx.quadraticCurveTo(
f.x,
f.y + 18,
f.x - 25,
f.y
);

ctx.fill();

/* TAIL */

ctx.beginPath();

ctx.moveTo(
f.x - 25,
f.y
);

ctx.lineTo(
f.x - 45,
f.y - 15
);

ctx.lineTo(
f.x - 45,
f.y + 15
);

ctx.closePath();

ctx.fill();

/* TOP FIN */

ctx.beginPath();

ctx.moveTo(
f.x - 5,
f.y - 8
);

ctx.lineTo(
f.x + 8,
f.y - 24
);

ctx.lineTo(
f.x + 16,
f.y - 6
);

ctx.closePath();

ctx.fill();

/* BOTTOM FIN */

ctx.beginPath();

ctx.moveTo(
f.x - 5,
f.y + 8
);

ctx.lineTo(
f.x + 10,
f.y + 22
);

ctx.lineTo(
f.x + 16,
f.y + 6
);

ctx.closePath();

ctx.fill();

/* EYE */

ctx.fillStyle =
'white';

ctx.beginPath();

ctx.arc(
f.x + 14,
f.y - 3,
4,
0,
Math.PI * 2
);

ctx.fill();

/* PUPIL */

ctx.fillStyle =
'black';

ctx.beginPath();

ctx.arc(
f.x + 15,
f.y - 3,
2,
0,
Math.PI * 2
);

ctx.fill();

/* MOUTH */

ctx.strokeStyle =
'#003344';

ctx.lineWidth=2;

ctx.beginPath();

ctx.arc(
f.x + 20,
f.y + 2,
4,
0.5,
2
);

ctx.stroke();

}

/* GAME LOOP */

function updateGame(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

drawBasket();

for(
let i=fish.length-1;
i>=0;
i--
){

const f = fish[i];

f.y += f.speed;

drawFish(f);

/* CATCH */

if(

f.y > basket.y &&

f.x > basket.x &&

f.x <
basket.x +
basket.width

){

fish.splice(i,1);

score++;

document.getElementById(
'score'
).textContent =
score;

/* PASSWORD */

if(score >= 15){

document.getElementById(
'passwordReveal'
).style.display =
'block';

}

}

/* REMOVE */

if(f.y > canvas.height){

fish.splice(i,1);

}

}

requestAnimationFrame(
updateGame
);

}

updateGame();

}

/* ======================================== */
/* ESC CLOSE */
/* ======================================== */

document.addEventListener(
'keydown',
(e)=>{

if(e.key === 'Escape'){

closePopup();

}

}
);

/* ======================================== */
/* CLICK OUTSIDE */
/* ======================================== */

window.addEventListener(
'click',
(e)=>{

const popup =
document.getElementById(
'videoPopup'
);

if(
popup &&
e.target === popup
){

closePopup();

}

}
);

console.log(
'Hushabye systems online.'
);
