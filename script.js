var data=[
    {
        "id":0,
        "title":"Call",
        "detail":"Feel free to call :+919045330192"
    },
    {
        "id":1,
        "title":"Mail",
        "detail":"Kindly mail : madhavdua26@gmail.com"
    }
]
let w= screen.width;
let ux=document.getElementById("ui").innerHTML;
if(w<=750){
    document.getElementById("ham").innerHTML="";  
}
if(w<=300){
    document.getElementById("ui").classList.add("hide");
}

let nav=document.getElementById('nav')
let bar=document.getElementsByClassName('bar')

function burger(){
document.getElementById("menu").classList.toggle("opened");
document.getElementById("navItems").classList.toggle("change");
for(let i=0; i<bar.length; i++){
    bar[i].classList.toggle('bg-light')
}
nav.classList.toggle('bg-dark');
}

// code for color changing circle
let circle=document.getElementById('blue-circle');

let color=["red","blue","green","yellow","blue","black"]
setInterval(() => {
    let c=Math.random()*5;
    c=Math.floor(c);
    circle.style.color=`${color[c]}`;
    
}, 500);