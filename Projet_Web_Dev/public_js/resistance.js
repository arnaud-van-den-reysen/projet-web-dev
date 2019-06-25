/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function gestionCalculResistance() {
    let couleur1 = parseInt(window.document.querySelector("#i_couleur1").value);
    let couleur2 = parseInt(window.document.querySelector("#i_couleur2").value);
    let couleur3 = parseInt(window.document.querySelector("#i_couleur3").value);

    let valeurResistance = (couleur1 * 10 + couleur2) * Math.pow(10, couleur3%3);
    window.document.querySelector("#ValeurResistance").value = valeurResistance;
    gestionAffichage(couleur3);
    gestionAffichageResistance("#cls-3",couleur1);
    gestionAffichageResistance("#cls-4",couleur2);
    gestionAffichageResistance("#cls-5",couleur3);
}

function gestionAffichageResistance(adresse,color){
    if(color === 0){
        window.document.querySelector(adresse).setAttribute("fill","balck");
    }
    if(color === 1){
        window.document.querySelector(adresse).setAttribute("fill","brown");
    }
    if(color === 2){
        window.document.querySelector(adresse).setAttribute("fill","red");
    }
    if(color === 3){
        window.document.querySelector(adresse).setAttribute("fill","orange");
    }
    if(color === 4){
        window.document.querySelector(adresse).setAttribute("fill","yellow");
    }
    if(color === 5){
        window.document.querySelector(adresse).setAttribute("fill","green");
    }
    if(color === 6){
        window.document.querySelector(adresse).setAttribute("fill","blue");
    }
    if(color === 7){
        window.document.querySelector(adresse).setAttribute("fill","violet");
    }
    if(color === 8){
        window.document.querySelector(adresse).setAttribute("fill","grey");
    }
    if(color === 9){
        window.document.querySelector(adresse).setAttribute("fill","white");
    }
}

function gestionAffichage(couleur) {
    if (couleur < 3) {
        window.document.querySelector("#PoidsResistance").value = "Ohms";
    }
    else if (couleur < 6) {
        window.document.querySelector("#PoidsResistance").value = "KiloOhms";
    }
    else if (couleur < 9) {
        window.document.querySelector("#PoidsResistance").value = "MegaOhms";
    }
    else {
        window.document.querySelector("#PoidsResistance").value = "GigaOhms";
    }
}

window.addEventListener("load", function () {
    window.document.querySelector("#i_couleur1").addEventListener("change",gestionCalculResistance);
    window.document.querySelector("#i_couleur2").addEventListener("change",gestionCalculResistance);
    window.document.querySelector("#i_couleur3").addEventListener("change",gestionCalculResistance);

});