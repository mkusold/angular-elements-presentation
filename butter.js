var ml = 0;
var goingRight = true;
function passButter() {
    butter = document.getElementById("butter");
    if(butter) {
        if(goingRight){
            ml += 20;
        } else {
            ml -= 20;
        }
        if(ml >= 80 && goingRight || ml < 20 && !goingRight){
            goingRight = !goingRight;
        }
        butter.style.transition = 'all 1s';
        butter.style.marginLeft = ml + '%' ;
    }
}