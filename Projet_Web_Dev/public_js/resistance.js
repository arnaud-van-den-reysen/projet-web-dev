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
        window.document.querySelector(adresse).setAttribute("fill","black");
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
        window.document.querySelector("#i_puissanceOhmique").value = 0;
    }
    else if (couleur < 6) {
        window.document.querySelector("#i_puissanceOhmique").value = 1;
    }
    else if (couleur < 9) {
        window.document.querySelector("#i_puissanceOhmique").value = 2;
    }
    else {
        window.document.querySelector("#i_puissanceOhmique").value = 3;
    }
}

function gestionCouleur(){
    let valeurResistance = parseInt(window.document.querySelector("#ValeurResistance").value);
    let puissanceResistance = parseInt(window.document.querySelector("#i_puissanceOhmique").value);
    let bande1;
    let bande2;
    let bande3 = parseInt(gestionPuissance(puissanceResistance));
    while(valeurResistance/100 > 1){
        valeurResistance = valeurResistance/10;
        bande3 += 1;
    }
    bande1 = parseInt(valeurResistance/10);
    bande2 = parseInt(valeurResistance%10);
    window.document.querySelector("#i_couleur1").value = bande1;
    window.document.querySelector("#i_couleur2").value = bande2;
    window.document.querySelector("#i_couleur3").value = bande3;
    gestionAffichageResistance("#cls-3",bande1);
    gestionAffichageResistance("#cls-4",bande2);
    gestionAffichageResistance("#cls-5",bande3);
}

/*function gestionValeurResistance(valeurResistance){
    let bande1;
    let bande2;
    let bande3 = parseInt(gestionPuissance(puissanceResistance));
    if(valeurResistance/100 < 1){
        bande1 = parseInt(valeurResistance/10);
        bande2 = parseInt(valeurResistance%10);
    }
    else if(valeurResistance/100 <1){
        valeurResistance = valeurResistance/10;
        bande3 += 1;
        bande1 = parseInt(valeurResistance/10);
        bande2 = parseInt(valeurResistance%10);
    }
    else{
        gestionValeurResistance
    }
}*/

function gestionPuissance(puissanceResistance){
    if(puissanceResistance === 0){
        return 0;
    }
    else if(puissanceResistance === 1){
        return 3;
    }
    else if(puissanceResistance === 2){
        return 6;
    }
    else{
        return 9;
    }
}

window.addEventListener("load", function () {
    window.document.querySelector("#i_couleur1").addEventListener("change",gestionCalculResistance);
    window.document.querySelector("#i_couleur2").addEventListener("change",gestionCalculResistance);
    window.document.querySelector("#i_couleur3").addEventListener("change",gestionCalculResistance);
    window.document.querySelector("#i_puissanceOhmique").addEventListener("change",gestionCouleur);
    window.document.querySelector("#ValeurResistance").addEventListener("change",gestionCouleur);
});