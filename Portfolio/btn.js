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
// Denna kod är simpel bara med en if-sats dvs om knapper som blivit kallad blir klickad så går den efter if 
// annars om den inte blir klickad så går den efter else satsen och gör det den säger. 
// Inget absolut komplicerat i denna javascript kod, skulle kunna göra samma variabel och function till båda
// Knappar såklart men kände att det skulle slösa mycket tid eftersom jag bara behövde 2 knappar. som snabbt skulle fungera.

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

