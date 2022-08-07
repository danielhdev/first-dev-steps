const draggableList = document.getElementById("draggable-list");
const checkButton = document.getElementById("check");

const topCities = [
"Paris",
"New York",
"London",
"Bangkok",
"Hong Kong",
"Dubai",
"Singapore",
"Rome",
"Macau",
"Istanbul"
];

//store list items
const listItems = [];

let dragStartIndex;

createList();
//insert list items into DOM

function createList() {
    [...topCities]
    .map(a => ({value: a, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((city, index) => {
    const listItem = document.createElement("li");

    listItem.setAttribute("data-index", index);

     listItem.innerHTML = `
     <span class="number">${index + 1}</span>
     <div class="draggable" draggable="true">
     <p class="city-name">${city}</p>
     </div>
    `;

    listItems.push(listItem);

    draggableList.appendChild(listItem);
    });
}
//draggable needs to be set to "true" in HTML to drag items


