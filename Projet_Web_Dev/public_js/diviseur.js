/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * @author arnaud VAN DEN REYSEN
 * 
 */
function calculDiviseur(){
    var vout = 0;
    
    let r1 = parseInt(window.document.querySelector("#R1").value);
    let r2 = parseInt(window.document.querySelector("#R2").value);
    let v2 = parseInt(window.document.querySelector("#V2").value);
    let v1 = parseInt(window.document.querySelector("#V1").value);
    
    //calcul de vout
    vout = (r1/(r1+r2))*v2-v1;
    
    //si ça n'existe pas alors crée elVout
    if(!window.document.querySelector('#Vout')) {
        let elVout = window.document.createElement('p');
        elVout.id = 'Vout'
        elVout.appendChild(window.document.createTextNode('Vout = ' + vout));
        window.document.querySelector('#diviseur_aff').appendChild(elVout);
    } else {
        window.document.querySelector('#Vout').remove();
        let elVout = window.document.createElement('p');
        elVout.id = 'Vout'
        elVout.appendChild(window.document.createTextNode('Vout = ' + vout + 'V'));
        window.document.querySelector('#diviseur_aff').appendChild(elVout);
    }
    
    //affiche les valeurs sur le dessin
    window.document.querySelector("#V1_aff").textContent = "V1:" + v1 + "V";
    window.document.querySelector("#V2_aff").textContent = "V2:" + v2 + "V";
    window.document.querySelector("#R1_aff").textContent = "R1:" + r1 + " Ω";
    window.document.querySelector("#R2_aff").textContent = "R2:" + r2 + " Ω";
    window.document.querySelector("#Vout_aff").textContent = "Vout:" + vout + " V";

}

window.addEventListener("load", function () {
    window.document.querySelector("#V1").addEventListener("input", calculDiviseur);
    window.document.querySelector("#V2").addEventListener("input", calculDiviseur);
    window.document.querySelector("#R1").addEventListener("input", calculDiviseur);
    window.document.querySelector("#R2").addEventListener("input", calculDiviseur);
});