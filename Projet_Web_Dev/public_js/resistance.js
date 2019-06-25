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
    
    gestionAffichageResistance(couleur1,couleur2,couleur3);
    window.document.querySelector("#i_couleur1").background.color = window.document.querySelector("#i_couleur1").value;
}

function gestionAffichageResistance(couleur1,couleur2,couleur3){
    window.document.querySelector("#cls-3").fill = couleur1;
    window.document.querySelector("#cls-4").fill = couleur2;
    window.document.querySelector("#cls-5").fill = couleur3;
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