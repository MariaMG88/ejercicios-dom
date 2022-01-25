/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="showme">Pillame!</button>
	<h1 id="pillado">Aqui estoy 8)</h1>
	<p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
	<h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
	<span data-function="testMe">Batman</span>
    <span data-function="testMe">Robin</span>
    <span data-function="testMe">Rick</span>
    <span data-function="testMe">Morty</span>
</body>
</html>*/


// EJERCICIOS 1

/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

const button$$ = document.querySelector('.fn-showme');
console.log(buttonn$$);

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/

const mostrarH1$$ = document.querySelector("#pillado");
console.log(mostrarh1$$);

/*1.3 Usa querySelector para mostrar por consola todos los p*/

const mostrarAllP$$ = document.querySelectorAll("p");
console.log(mostrarAllP$$); 


/*1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon*/

const mostrarAllPokemon$$ = document.querySelectorAll(".fn-pokemon");
console.log(mostrarAllPokemon$$);



/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/

const mostrarFunctions$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(mostrarFunctions$$); 


/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe"*/

const mostrarPersonaje$$ = document.querySelector('[data-function="testMe"]');
console.log(mostrarPersonaje$$[2]);




/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
	<h2 class="fn-insert-here"></h2>
	<p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
  <p>No me elimines!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
	<div></div><div></div>
	<div class="fn-insert-here"></div>
  <div class="fn-insert-here"></div>
</body>
</html>*/


// EJERCICIOS 2

/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/

const newDiv$$ = document.createElement("div");
document.appendChild(newDiv$$);



/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

const divConP$$ = document.createElement("div");
const pEnDiv$$ = document.createElement("p");
divConP$$.appendChild(pEnDiv$$);
document.body.appendChild(divConP$$);


/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/

const divSeisP$$ = document.createElement("div");
document.appendChild(divSeisP$$);

    for (const i = 0; i < 6; i++) {
        const seisP = document.createElement("p");
        divSeisP$$.appendChild(seisP);
    }



/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/

const textoP$$ = document.createElement("p");
textoP$$.textContent = "Soy dinámico!";
document.body.appendChild(textoP$$);



/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

const insertH2 = document.querySelector(".fn-insert-here");
insertH2.textContent = "Wubba Lubba dub dub";



/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/

const apps = [
    'Facebook', 
    'Netflix', 
    'Instagram', 
    'Snapchat', 
    'Twitter'
];

let newUl$$ = document.createElement("ul");
    for (const app of apps) {
        let newLi$$ = document.createElement("li");
        newLi$$.textContent = app;
        newUl$$.appendChild(newLi$$); 
    }

    document.body.createElement(newUl$$);




/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

let deleteNodes = document.querySelectorAll(".fn-remove-me");
    for(const node of deleteNodes){
        node.remove();
    }



/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

let newP$$ = document.createElement("p");
selectDivs = document.querySelectorAll("div");

newP$$.textContent = "Voy en medio!";
    
document.body.insertBefore(newP$$, selectDivs[1]);




/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
.fn-insert-here*/

let selectClass = document.querySelectorAll('[.fn-insert-here]');

for (const class of selectClass){
    let newP$$ = document.createElement("p");
    newP$$.textContent= "Voy dentro!"

    class.appendChild(newP$$);
}



