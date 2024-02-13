let titulo = document.querySelector('h1');
titulo.innerHTML='Hora del desafio';

function funcionConsola(){
    console.log("El botón fue clicado");
}
function funcionPrompt(){
    let ciudad = prompt("Ingrese el nombre de una ciudad de Brasil: ");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}
function funcionAlert(){
    alert("Yo amo JS");
}
function funcionSuma(){
    let num1 = Number(prompt("Ingrese un numero: "));
    let num2 = Number(prompt("Ingrese otr numero: "));
    alert(`la suma de ambos numeros es: ${num1+num2}`);
}