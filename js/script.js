let ordemCorreta = [1,1,4,2,4,1];
let ordemUsuario =[];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const msgErro = document.getElementById("msgErro");
const sucesso = document.getElementById("sucesso");
const somClick1 = new Audio('./audio/btnExtra.mp3');
const somClick2 = new Audio('./audio/btn2.mp3');
const somClick3 = new Audio('./audio/btn3.mp3');
const somClick4 = new Audio('./audio/btn4.mp3');
const somClickErro = new Audio('./audio/sirene.mp3');
const somClickSucesso = new Audio('./audio/success.mp3');

btn1.value = 1;
btn2.value = 2;
btn3.value = 3;
btn4.value = 4;


btn1.addEventListener("click", function(){
  ordemUsuario.push(1);
  somClick1.play();
  console.log(ordemUsuario);
  console.log(ordemCorreta);
})

btn2.addEventListener("click", function(){
  ordemUsuario.push(2);
  somClick2.play();
  console.log(ordemUsuario);
  console.log(ordemCorreta);
})

btn3.addEventListener("click", function(){
  ordemUsuario.push(3);
  somClick3.play();
  console.log(ordemUsuario);
  console.log(ordemCorreta);
})

btn4.addEventListener("click", function(){
  ordemUsuario.push(4);
  somClick4.play();
  console.log(ordemUsuario);
  console.log(ordemCorreta);
})


function desarmarAlarme(){
    msgErro.innerText = "";
    sucesso.innerText = "";
    if(JSON.stringify(ordemCorreta) === JSON.stringify(ordemUsuario)){
      sucesso.innerText = "🌟 Alarme desarmado 🌟";
      somClickSucesso.play();
      ordemUsuario= [];
    } else {
      msgErro.innerText = "🚨 Senha incorreta!! 🚨"
      somClickErro.play();
      ordemUsuario= [];
    } 
    console.log(ordemUsuario);
}