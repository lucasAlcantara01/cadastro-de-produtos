const formCadastro = document.querySelector('#formCadastro');
const inputName = document.querySelector('#name-input');
const inputDescription = document.querySelector('#description-input');
const inputPrice = document.querySelector('#price-input');
const option = document.querySelector('#option');
const listItem = document.querySelector('#list-item');
const list = document.querySelector('#list');


//function
const saveProduct = (name, description, price) => {
    const product = document.createElement('tr');

    const listName = document.createElement('td');
    listName.innerText = name;
    product.appendChild(listName);

    const listDescription = document.createElement('td');
    listDescription.innerText = description;
    product.appendChild(listDescription);

    const listPrice = document.createElement('td');
    listPrice.innerText = price;
    product.appendChild(listPrice);

    listItem.appendChild(product);

    sortByPrice();

    inputName.value = "";
    inputDescription.value = "";
    inputPrice.value = "";

    inputName.focus();
}

const sortByPrice = () => {
    let rows = Array.from(listItem.getElementsByTagName('tr'));
    rows.sort((a, b) => {
        let priceA = parseFloat(a.getElementsByTagName('td')[2].innerText);
        let priceB = parseFloat(b.getElementsByTagName('td')[2].innerText);
        return priceA - priceB;
    });
    listItem.innerHTML = ""; 
    rows.forEach(row => listItem.appendChild(row)); 
}

const listToggle = () => {
    list.classList.remove('hide');
}

//Event
formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = inputName.value;
    const descriptionValue = inputDescription.value;
    const priceValue = inputPrice.value;

    if (nameValue && descriptionValue) {
        saveProduct(nameValue, descriptionValue, priceValue);
        listToggle();
    } else {
        window.alert('Preencha os campos');
    }
})
