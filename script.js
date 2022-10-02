var data=[
    {
        "id":0,
        "title":"Call",
        "detail":"You can call me on :+919045330192"
    },
    {
        "id":1,
        "title":"Mail",
        "detail":"You can mail me on : madhavdua26@gmail.com"
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
function burger(){
document.getElementById("menu").classList.toggle("opened");
document.getElementById("navItems").classList.toggle("change");

}