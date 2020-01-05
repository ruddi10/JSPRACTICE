const keys=document.querySelectorAll(".key");
console.log()
function removec(e){
	this.classList.remove("playing");
};
keys.forEach(key=> key.addEventListener("transitionend",removec));

window.addEventListener("keydown",function(event){
let a= document.querySelector("audio[data-key=\""+event.keyCode+"\"]");
let k= document.querySelector(".key[data-key=\""+event.keyCode+"\"]");

if(!a)return;
else
{	a.currentTime=0;
	a.play();
	k.classList.add("playing");
}

});
