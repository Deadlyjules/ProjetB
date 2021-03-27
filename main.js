var browniePic = document.getElementById("brownie");
var addb=1;
var clicknb = 0;
var clickernb = 0;
var clickerprice = 10;
var addBrownieClicker = setInterval(funcAddBrownie,10);
var updBrownie = setInterval(updatebro, 10);



browniePic.width = (screen.width)*(16/100);


document.getElementById("up1").style.visibility = "hidden";


function updatebro(){
    nbarrondi = +clicknb.toFixed(0);
    nbarrondi = nbarrondi.toString();
    document.getElementById("nbbro").innerHTML = nbarrondi.concat(" Brownies");

    if (clicknb >= clickerprice) {
        document.getElementById("up1").disabled = 0;
    } else {
        document.getElementById("up1").disabled = 1;
    }

    if (clicknb >= 5){
        document.getElementById("up1").style.visibility = "visible";
    }

}

browniePic.onclick = function() {
    var i = 15;
    var animVar = setInterval(brownieAnimate, 10);

    function brownieAnimate() {
        browniePic.width = (screen.width)*(i/100);
        i = i + 0.5;
        if (i == 16.5) { clearInterval(animVar); }
    }
    clicks()
}

function clicks() {
    clicknb+=addb;
}

function funcAddBrownie() {
    clicknb += (0.005*clickernb);
}

document.getElementById("up1").onclick = function() {
    clicknb -= clickerprice;
    clickernb += 1;
}