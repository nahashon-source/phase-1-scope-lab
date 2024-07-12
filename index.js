var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  window.bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'alice';

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'charlie';
  } catch (error) {
    console.log("Can't change a constant!");
    throw error; // rethrow the error
  }
}