/* Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="exercise-1.js" defer></script>
    <title>Document</title>
</head>
<body>
    <p class="fn-remove-me">Bye bye</p>
		<div data-function="printHere"></div>
</body>
</html>*/


/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ['Japón', 
    'Nicaragua',
    'Suiza', 
    'Australia', 
    'Venezuela'
];
let lista$$= document.createElement("ul");  

for(const country of countries) {
    let sublista$$ = document.createElement("li");
    sublista$$.textContent = country;
    lista$$.appendChild(sublista$$);
}
document.body.appendChild(lista$$);
console.log(countries);





/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

let deleteElement = document.querySelector(".fn-remove-me");
deleteElement.remove();



/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere" */

const cars = [
    'Mazda 6', 
    'Ford fiesta', 
    'Audi A4', 
    'Toyota corola'
];

let selectDiv = document.querySelector('[data-function="printHere"]');

let createList = document.createElement("ul");

for(const car of cars) {
    let pointsList = document.createElement("li");
    pointsList.textContent = car;
    createList.appendChild(pointsList);
}
selectDiv.appendChild(createList);



/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries) {
    let createCountryItem = document.createElement("div");
    createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;
  
    document.body.appendChild(createCountryItem);
}



/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/


const lastElementButton = document.querySelector("#delete-last-element");
lastElementButton.addEventListener("click", function () {
  const selectDivs = document.querySelectorAll("div");
  selectDivs[selectDivs.length - 1].remove();
});



/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/

const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  for (const country of countries) {
    let createCountryItem = document.createElement("div");
    createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";

    createCountryItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        createCountryItem.remove();
    })

    document.body.appendChild(createCountryItem);