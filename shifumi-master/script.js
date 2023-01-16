const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');    
ScoreIa = 0;
ScorePlayer = 0;
Iapower= 0;
PlayerPower=0;
function audioplayer(){
    var play = confirm('Do you want to play some music?');
    if(play){
        document.getElementById("audio").play();
    }else{
        console.log('I understand, Music will not play.')
    }
}
window.onload = function() {
    audioplayer();
  }





function ResetAnim(){ player.classList.remove('translate-right');
player.style.animation = 'none';
player.offsetHeight; /* trigger reflow */
player.style.animation = null; 
player.classList.add("translate-left")

ia.classList.remove('translate-left');
    ia.style.animation = 'none';
    ia.offsetHeight; /* trigger reflow */
    ia.style.animation = null; }

function Iachoices() {

const Choices = [ 'shi', 'fu', 'mi'];
const Calcul = Math.floor(Math.random() * Choices.length);
console.log(Choices[Calcul]); 
ia.classList.remove('translate-left');
if (Choices[Calcul] === 'shi'){
    document.getElementById('ia').src="/img/shi.png"
    ia.classList.add("translate-right")
    Iapower=1
  
} if (Choices[Calcul] === 'fu'){
   document.getElementById('ia').src="/img/fu.png"
   ia.classList.add("translate-right")
   Iapower=2
 
} if (Choices[Calcul] === 'mi'){
  document.getElementById('ia').src="/img/mi.png"
  ia.classList.add("translate-right")
  Iapower=3

}
}
function shisrc() {
    player.src="/img/shi.png";
    player.classList.add("translate-left")
    PlayerPower=1;
    ResetAnim()
    Iachoices()
    ScoreUp()
    }
function fusrc() {
    player.src="/img/fu.png";
    player.classList.add("translate-left")
    PlayerPower=2;
    ResetAnim()
    Iachoices()
    ScoreUp()
    }
function misrc() {
    player.src="/img/mi.png";
    player.classList.add("translate-left")
    PlayerPower=3;
    ResetAnim()
    Iachoices()
    ScoreUp()
    }
function ScoreUp(){
win()
if(PlayerPower==1&&Iapower==2){
    ScorePlayer++;
    ScoreIa--;
}if(PlayerPower==2&&Iapower==3){
    ScorePlayer++;
    ScoreIa--;
}if(PlayerPower==3&&Iapower==1){
    ScorePlayer++;
    ScoreIa--;
}if(PlayerPower===Iapower){
    console.log('draw')
}else{
    ScoreIa++;
}
document.getElementById("score-player").innerText = ScorePlayer
document.getElementById("score-ia").innerText = ScoreIa
console.log(ScorePlayer);
console.log(ScoreIa);
}

function  win(){
    if(ScorePlayer===3){
        alert('uWON')
        ScorePlayer = 0
        ScoreIa = 0
    }if (ScoreIa===3){
        ScorePlayer = 0
        ScoreIa = 0
        alert('uLOSE')
}
}


