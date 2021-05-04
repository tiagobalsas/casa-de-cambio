const fetchCurrency = (currency) => {
  const endpoint = `https://api.ratesapi.io/api/latest?base=${currency}`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((obj) => console.log(obj))

    .catch((error) => {});

  //tratar os resultados da requisição
};

const handleSearchEvent = () => {
  const searchInput = document.querySelector('#currency-input');
  const currency = searchInput.value.toUpperCase();

  fetchCurrency(currency);
};

const setupEvents = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
};

window.onload = () => {
  setupEvents();
};
