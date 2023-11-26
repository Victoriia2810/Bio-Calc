let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let button = document.getElementById("b");
const a_coef = 3;
const n_coef = -9;


button.addEventListener("click", function() {
    console.log("Pressed");
    let a = document.getElementById("a_input").value;
    let n = parseInt(document.getElementById("n_input").value);
    let a_f = a*a_coef;
    let n_f = n + parseInt(n_coef);
    console.log(n_f);

    if (a_f <= 0) { p1.innerHTML =" fail "; }
    else {
        while (a_f >= 10){
            a_f /= 10;
            n_f++;
        }
    };
    p1.innerHTML = `1) ${a}×10<sup>${n}</sup><b> КУО/мл</b> × 1000 = ${a}×10<sup>${n+3}</sup><b> КУО/л</b>`;
    p2.innerHTML = `2) ${a}×10<sup>${n+3}</sup><b> КУО/мл</b> × 3×10<sup>-12</sup><b> г</b> = ${a_f}×10<sup>${n_f}</sup><b> КУО/л</b>`;


    for(let i = 0; i < n_f; i++) a_f *= 10;
    for(let i = 0; i > n_f; i--) a_f /= 10;
    // while(n_f < 0){
    //     a_f /= 10;
    //     n_f++;
    // }
    // while(n_f > 0){
    //     a_f *= 10;
    //     n_f--;
    // }
    console.log(a_f);
    console.log(n_f);
    p2.innerHTML += ` = ${Math.round(a_f * Math.pow(10, Math.abs(n_f)+3))/Math.pow(10, Math.abs(n_f)+3)}<b> г/л</b>`;



});

function Calc (a, n){
    


}



