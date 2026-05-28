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
document.getElementById('stars');

if(starsContainer){

for(let i=0;i<140;i++){

  const star =
  document.createElement('div');

  star.classList.add('star');

  star.style.left =
  Math.random()*100+'vw';

  star.style.top =
  Math.random()*100+'vh';

  star.style.animationDelay =
  Math.random()*5+'s';

  star.style.opacity =
  Math.random();

  starsContainer.appendChild(star);

}

}

/* ======================================== */
/* VIDEO LINKS */
/* ======================================== */

/* INDEX */

const momoEpisode =
'https://www.youtube.com/embed/YOUR_MOMO_VIDEO';

const pipEpisode =
'https://www.youtube.com/embed/YOUR_PIP_VIDEO';

const restrictedEpisode =
'https://www.youtube.com/embed/YOUR_RESTRICTED_VIDEO';

/* ADMIN */

const starbellEpisode =
'https://www.youtube.com/embed/YOUR_STARBELL_VIDEO';

const lastBedtimeEpisode =
'https://www.youtube.com/embed/YOUR_LASTBEDTIME_VIDEO';

const tape1 =
'https://www.youtube.com/embed/YOUR_TAPE1';

const tape2 =
'https://www.youtube.com/embed/YOUR_TAPE2';

const tape3 =
'https://www.youtube.com/embed/YOUR_TAPE3';

const tape4 =
'https://www.youtube.com/embed/YOUR_TAPE4';

/* CEO */

const quietKingVideo =
'https://www.youtube.com/embed/YOUR_QUIET_KING_VIDEO';

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

popup.style.display='flex';

frame.src = videoURL;

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

popup.style.display='none';

frame.src='';

}

}

/* ======================================== */
/* PASSWORD SYSTEM */
/* ======================================== */

function openRestricted(){

const popup =
document.getElementById(
'passwordPopup'
);

if(popup){

popup.style.display='flex';

}

}

function checkPassword(){

const input =
document.getElementById(
'passwordInput'
);

if(!input)return;

const password =
input.value;

if(password === 'STLS'){

openVideo(restrictedEpisode);

const popup =
document.getElementById(
'passwordPopup'
);

if(popup){

popup.style.display='none';

}

}else{

alert(
'ACCESS DENIED'
);

}

}

/* ======================================== */
/* CEO ACCESS */
/* ======================================== */

function checkCEO(){

const input =
document.getElementById(
'ceoPassword'
);

if(!input)return;

const password =
input.value;

if(password === 'Mastermind'){

window.location.href =
'ceo.html';

}else{

alert(
'EXECUTIVE ACCESS DENIED'
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

/* SPAWN FISH */

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

/* DRAW BASKET */

function drawBasket(){

ctx.fillStyle='#ffd27f';

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

/* DRAW FISH */

function drawFish(f){

/* BODY */

ctx.fillStyle='#8fe3ff';

ctx.beginPath();

ctx.ellipse(

f.x,
f.y,

22,
12,

0,
0,
Math.PI*2

);

ctx.fill();

/* TAIL */

ctx.beginPath();

ctx.moveTo(
f.x-18,
f.y
);

ctx.lineTo(
f.x-35,
f.y-10
);

ctx.lineTo(
f.x-35,
f.y+10
);

ctx.closePath();

ctx.fill();

/* EYE */

ctx.fillStyle='white';

ctx.beginPath();

ctx.arc(
f.x+10,
f.y-2,
3,
0,
Math.PI*2
);

ctx.fill();

/* PUPIL */

ctx.fillStyle='black';

ctx.beginPath();

ctx.arc(
f.x+11,
f.y-2,
1.5,
0,
Math.PI*2
);

ctx.fill();

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

/* LOOP FISH */

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

const scoreText =
document.getElementById(
'score'
);

if(scoreText){

scoreText.textContent =
score;

}

/* PASSWORD REVEAL */

if(score >= 15){

const reveal =
document.getElementById(
'passwordReveal'
);

if(reveal){

reveal.style.display =
'block';

}

}

}

/* REMOVE */

if(f.y > canvas.height){

fish.splice(i,1);

}

}

/* LOOP */

requestAnimationFrame(
updateGame
);

}

updateGame();

console.log(
'Fishing Frenzy initialized.'
);

}

/* ======================================== */
/* BOSS FIGHT */
/* ======================================== */

const bossCanvas =
document.getElementById(
'bossCanvas'
);

if(bossCanvas){

const bossCtx =
bossCanvas.getContext('2d');

let bossHealth = 300;

let phase = 1;

/* START */

function startBossFight(){

const bossSection =
document.getElementById(
'bossSection'
);

if(bossSection){

bossSection.style.display =
'block';

}

drawBoss();

window.scrollTo({

top:
document.body.scrollHeight,

behavior:'smooth'

});

}

window.startBossFight =
startBossFight;

/* DRAW */

function drawBoss(){

bossCtx.clearRect(
0,
0,
bossCanvas.width,
bossCanvas.height
);

/* BACKGROUND */

for(let i=0;i<250;i++){

bossCtx.fillStyle =
`rgba(255,255,255,${
Math.random()*0.12
})`;

bossCtx.fillRect(

Math.random()*900,
Math.random()*500,

2,
2

);

}

/* BODY */

bossCtx.fillStyle =
'#090909';

bossCtx.fillRect(
380,
180,
140,
200
);

/* ARMS */

bossCtx.fillRect(
250,
220,
130,
25
);

bossCtx.fillRect(
520,
220,
130,
25
);

/* LEGS */

bossCtx.fillRect(
405,
380,
30,
90
);

bossCtx.fillRect(
465,
380,
30,
90
);

/* HEAD */

bossCtx.beginPath();

bossCtx.arc(
450,
130,
90,
0,
Math.PI*2
);

bossCtx.fill();

/* EYES */

bossCtx.fillStyle='white';

bossCtx.beginPath();
bossCtx.arc(
420,
115,
10,
0,
Math.PI*2
);
bossCtx.fill();

bossCtx.beginPath();
bossCtx.arc(
480,
115,
10,
0,
Math.PI*2
);
bossCtx.fill();

/* SMILE */

bossCtx.strokeStyle =
'#d8c7ff';

bossCtx.lineWidth = 5;

bossCtx.beginPath();

bossCtx.arc(
450,
150,
35,
0,
Math.PI
);

bossCtx.stroke();

/* EXTRA EYES */

for(let i=0;i<6;i++){

bossCtx.fillStyle='white';

bossCtx.beginPath();

bossCtx.arc(
390 + (i*20),
260,
5,
0,
Math.PI*2
);

bossCtx.fill();

}

/* PHASE */

bossCtx.fillStyle =
'#bda9ff';

bossCtx.font =
'30px Fredoka';

bossCtx.fillText(
'PHASE ' + phase,
30,
50
);

}

/* ATTACK */

function attackBoss(){

if(bossHealth <= 0){
return;
}

bossHealth -= 10;

const healthText =
document.getElementById(
'bossHealth'
);

if(healthText){

healthText.textContent =
bossHealth;

}

/* PHASES */

if(bossHealth <= 200){

phase = 2;

}

if(bossHealth <= 100){

phase = 3;

}

/* VISUALS */

if(phase === 2){

document.body.style.background =
'linear-gradient(to bottom,#12051f,#000000)';

}

if(phase === 3){

document.body.style.background =
'black';

const logo =
document.querySelector(
'.logo'
);

if(logo){

logo.textContent =
'QUIET HOUR ACTIVE';

}

}

/* REDRAW */

drawBoss();

/* WIN */

if(bossHealth <= 0){

setTimeout(()=>{

const ending =
document.getElementById(
'endingSection'
);

if(ending){

ending.style.display =
'block';

}

alert(
'THE SIGNAL HAS BEEN BROKEN.'
);

},500);

}

}

window.attackBoss =
attackBoss;

/* ENDING */

function playEnding(){

document.body.style.background =
'linear-gradient(to bottom,#8ec5ff,#f6f7ff)';

document.body.style.color =
'#111';

const logo =
document.querySelector(
'.logo'
);

if(logo){

logo.textContent =
'THE BROADCAST IS OVER';

}

alert(
'The children have finally been freed.'
);

}

window.playEnding =
playEnding;

drawBoss();

console.log(
'Quiet King encounter loaded.'
);

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
/* CLICK OUTSIDE CLOSE */
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
