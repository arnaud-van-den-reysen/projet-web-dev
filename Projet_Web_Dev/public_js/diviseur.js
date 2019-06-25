/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calculDiviseur(){
    var vout = 0;
    
    let r1 = parseInt(window.document.querySelector("#R1").value);
    let r2 = parseInt(window.document.querySelector("#R2").value);
    let vcc = parseInt(window.document.querySelector("#VCC").value);
    
    vout = (r1/(r1+r2))*vcc;
    
    if(!window.document.querySelector('#Vout')) {
        let elVout = window.document.createElement('p');
        elVout.id = 'Vout'
        elVout.appendChild(window.document.createTextNode('Vout = ' + vout));
    } else {
        
    }
    
}

window.addEventListener("load", function () {
    window.document.querySelector("#button_diviseur").addEventListener("click", calculDiviseur);
});