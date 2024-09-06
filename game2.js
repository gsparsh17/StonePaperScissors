let rock1=document.getElementById("rock");
let paper1=document.getElementById("paper");
let scissors1=document.getElementById("scissors");
let rock2=document.getElementById("rock1");
let paper2=document.getElementById("paper1");
let scissors2=document.getElementById("scissors1");
let score11=document.getElementById("score1");
let score22=document.getElementById("score2");

let a="";
var one=0;
var second=0;
let boxes1=document.getElementsByClassName("boxes");
console.log(boxes1)
function rockf(){
    a="rock";
    console.log(a);
    let cpu=Math.floor(Math.random()*3);
let b=["rock","paper","scissors"][cpu];
console.log(b);
if(b=="scissors"){
    one=one+1;
}
if(b=="paper"){
    second=second+1;
}
console.log(one);
console.log(second);
score11.innerHTML=one;
score22.innerHTML=second;
rock2.style.marginLeft='230px';
paper2.style.display='none';
scissors2.style.display='none';
dis(b);
setTimeout(result,1000);
}
function paperf(){
    console.log("paper");
    a="paper";
    let cpu=Math.floor(Math.random()*3);
let b=["rock","paper","scissors"][cpu];
console.log(b);
if(b=="rock"){
    one=one+1;
}
if(b=="scissors"){
    second=second+1;
}
score11.innerHTML=one;
score22.innerHTML=second;
console.log(one);
console.log(second);
paper2.style.marginLeft='240px';
rock2.style.display='none';
scissors2.style.display='none';
dis(b);
setTimeout(result,1000);
}
function scissorsf(){
    console.log("scissors");
    a="scissors";
    let cpu=Math.floor(Math.random()*3);
let b=["rock","paper","scissors"][cpu];
console.log(b);
if(b=="paper")
{
    one=one+1;
}
if(b=="rock")
{
    second=second+1;
}
score11.innerHTML=one;
score22.innerHTML=second;
console.log(one);
console.log(second);
scissors2.style.marginLeft='240px';
paper2.style.display='none';
rock2.style.display='none';
dis(b);
setTimeout(result,1000);
}
function dis(c){
    if(c=="rock")
    {
        paper1.style.display='none';
        scissors1.style.display='none';
        rock1.style.display='block';
    }
    if(c=="paper")
    {
        rock1.style.display='none';
        scissors1.style.display='none';
        paper1.style.display='block';
    }
    if(c=="scissors")
    {
        scissors1.style.display='block';
        paper1.style.display='none';
        rock1.style.display='none';
    }
    setTimeout(redis,700)
}
function redis(){
    scissors1.style.display='none';
    paper1.style.display='none';
    rock1.style.display='none';
    scissors2.style.display='block';
    paper2.style.display='block';
    rock2.style.display='block';
}
function result(){
    if(one==10||second==10){
        localStorage.one=one;
        localStorage.second=second;
    window.location.assign("game3.html");
    }
}
