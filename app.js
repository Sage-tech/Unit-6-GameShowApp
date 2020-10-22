


const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameButton = document.getElementsByClassName('btn__reset')[0];
const ul = document.getElementById('phrase').querySelector('ul');
const ol = document.getElementById('scoreboard').querySelector('ol');
let liveHeart = document.querySelectorAll('IMG');
let triesImg = Array.from(document.querySelectorAll('.tries img'));
const overlay = document.getElementById('overlay');

const missed = 0;
const listItem = ul.children;

const phrases= [

];

function startGame(){ 
    const div = document.getElementById('overlay');
    startGameButton.addEventListener('click', () => {
    div.style.display='none';
})
};
startGame();

function getRandomPhraseAsArray(arr){
 return phrases[Math.floor(Math.random() * phrases.length)].split('');
};

function adddPhraseToDisplay(arr){
    for (let i = 0; i < arr.length; i++){
    const listItem = document.createElement('li');
    listItem.textContent = arr[i];
    ul.appendChild(listItem)
    if (listItem.textContent == ''){
    listItem.className = 'space';
    } else {
     listItem.className = 'letter';
    }
    }
}












