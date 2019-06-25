/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calculDiviseur(){
    var vout = 0;
    
    let r1 = parseInt(window.document.querySelector("#R1").value);
    let r2 = parseInt(window.document.querySelector("#R2").value);
    let v2 = parseInt(window.document.querySelector("#V2").value);
    let v1 = parseInt(window.document.querySelector("#V1").value);
    
    vout = (r1/(r1+r2))*v2-v1;
    
    //si ça n'existe pas
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
    $("#V1").textContent = "My Value";
    $("#V2").text(v2);
    $("#R1").text(r1);
    $("#R2").text(r2);

}

window.addEventListener("load", function () {
    window.document.querySelector("#V1").addEventListener("input", calculDiviseur);
    window.document.querySelector("#V2").addEventListener("input", calculDiviseur);
    window.document.querySelector("#R1").addEventListener("input", calculDiviseur);
    window.document.querySelector("#R2").addEventListener("input", calculDiviseur);
});