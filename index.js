console.log(" Hello Friends!");
var counth1=document.getElementById("count");
var incbutton=document.getElementById("increment");
var decbutton=document.getElementById("decrement");
var incount=0;
incbutton.onclick=increment
decbutton.onclick=decrement
function increment(){
    incount=incount+1;
    console.log(incount);
    counth1.innerText=incount;
}
function decrement(){
    incount=incount-1;
    console.log(incount);
    counth1.innerText=incount;
}