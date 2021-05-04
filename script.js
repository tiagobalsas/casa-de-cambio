const handleRates = (rates) => {};

const fetchCurrency = (currency) => {
  const endpoint = `https://api.ratesapi.io/api/latest?base=${currency}`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((object) => {
      if (object.error) {
        throw new Error(object.error);
      }
      handleRates(object);
    })

    .catch((error) => {
      console.log(error);
    });
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
