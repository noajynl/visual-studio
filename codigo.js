let i = 0;
let colorNormal = true;
let resultadoSuma = 0;

var tachado = document.getElementById('tachado'),
    item1 = document.getElementById('item1'),
    item2 = document.getElementById('item2'),
    item3 = document.getElementById('item3'),
    item4 = document.getElementById('item4'),
    item5 = document.getElementById('item5'),

    contador = 0;
const slider1 = document.querySelector("#sld1");
const slider2 = document.querySelector("#sld2");

const reactTemas = document.getElementsByClassName('ract-tema');

const reactContainer = document.getElementById('react-xpand1');
const boton = document.getElementById('botonColor');

const resultadoParrafo =  document.getElementById('resultado')

function mostrarClic(){
    i+=1;
    console.log(`clic ${i}`);
}

function mostrarValor(){
    let resultadoSuma = parseInt(slider1.value) + parseInt(slider2.value);
    console.log(resultadoSuma);
}

function mostrarContent(objeto){
    console.log(objeto.target.innerText);
}


function tachar(){
        if(contador==0){
            item1.classList.add('tachado');
            item2.classList.add('tachado');
            item3.classList.add('tachado');
            item4.classList.add('tachado');
            item5.classList.add('tachado');
            contador=1;
        }
        else{
            item1.classList.remove('tachado');
            item2.classList.remove('tachado');
            item3.classList.remove('tachado');
            item4.classList.remove('tachado');
            item5.classList.remove('tachado');
            contador=0;
        }
}

function cambiarColor(){
    if(colorNormal){
        reactContainer.style.backgroundColor = '#4c4b9a'; 
        resultadoParrafo.style.color = '#f2efed';
    }
    else{
        reactContainer.style.backgroundColor = '#f2efed';
        resultadoParrafo.textContent = resultadoSuma; 
    }
    colorNormal = !colorNormal;
}

for (const tema of reactTemas){
    tema.addEventListener('click', mostrarContent)
}

boton.addEventListener('click', cambiarColor)

tachado.addEventListener('click',tachar)