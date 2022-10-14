var clicked = false;

function MyFunction(){
    
    if (clicked){
        document.getElementById("submenu_1").style.display = "none";
    }
    else {
        document.getElementById("submenu_1").style.display = "block";
    }
    clicked = !clicked

}

var clicked2 = false;
function two_function(){
    
    if (clicked2){
        document.getElementById("submenu_2").style.display = "none";
    }
    else {
        document.getElementById("submenu_2").style.display = "block";
    }
    clicked2 = !clicked2

} 

