
let one=localStorage.one;
let second=localStorage.second;
let head=document.getElementById("heading");
console.log(one);
if(one==10){
    head.innerHTML="YOU WIN";
}
if(second==10){
    head.innerHTML="CPU WIN";
}
