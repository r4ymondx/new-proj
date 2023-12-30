



//sticky nav
window.onscroll= function(){myFunction()};

//get current value
let navbar=document.getElementById("header");

//get navbar position
let sticky=navbar.offsetTop;

//sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
navbar.classList.add("sticky");
    }else{
navbar.classList.remove("sticky");
    }
}

