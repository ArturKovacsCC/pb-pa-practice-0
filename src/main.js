
const products = [
    {
        name: "Egg Plant",
        quantity: 13,
        type: "v"
    },
    {
        name: "Apple",
        quantity: 25,
        type: "f"
    },
    {
        name: "Strawberry",
        quantity: 20,
        type: "f"
    },
    {
        name: "Garlic",
        quantity: 7,
        type: "v"
    },
    {
        name: "Tomato",
        quantity: 12,
        type: "v"
    },
    {
        name: "Blueberry",
        quantity: 50,
        type: "f"
    }
];

const showFullTypeButton = document.querySelector("#full-type-btn");
showFullTypeButton.addEventListener("click", showFullType);
function showFullType() {
    const vegTypes = document.querySelectorAll(".type");
    for (let i = 0; i < vegTypes.length; i++) {
        let type = vegTypes[i].innerText;
        if (type == "v") {
            vegTypes[i].innerText = "vegetable";
        } else if (type == "f") {
            vegTypes[i].innerText = "fruit";
        }
    }
}
function populateTable() {
    const tBody = document.querySelector("#products");
    for (const product of products) {
        const row = createChild("tr", tBody);

        const name = createChild("td", row, product.name);
        name.classList.add("name");

        const quantity = createChild("td", row, product.quantity);
        quantity.classList.add("quantity");

        const type = createChild("td", row, product.type);
        type.classList.add("type");
    }
}
function createChild(tag, parent, innerText) {
    const element = document.createElement(tag);
    parent.appendChild(element);
    if (innerText) {
        element.innerText = innerText;
    }
    return element;
}
populateTable();
