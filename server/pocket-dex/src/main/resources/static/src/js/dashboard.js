

async function getWallets() {
    return fetch("http://localhost:8080/getWallets")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Do whatever you want with the JSON data
      console.log(data);
      return data; // Return the data fetched from the server
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

const budgetContainer = document.querySelector(".row1-budget-amount");
const balanceContainer = document.querySelector(".row1-balance-amount");
const expenseContainer = document.querySelector(".row1-expense-amount");

getWallets().then(data => {
    let budget = data[0].budget;
    let balance = data[0].balanace;
    budgetContainer.innerHTML = `Rs ${budget}`;
    balanceContainer.innerHTML = `Rs ${balance}`;
    expenseContainer.innerHTML = `Rs ${budget - balance}`;
})




























const submitBtn = document.querySelector(".m-b-r-top-form-submit");

submitBtn.addEventListener("click", addTransaction);

async function addTransaction(event) {

    let amount = document.querySelector(".m-b-r-top-form-amount").value;
    let title = document.querySelector(".m-b-r-top-form-title").value;
    let date = document.querySelector(".m-b-r-top-form-date").value;
    let category = document.querySelector(".m-b-r-top-form-category").value;

    const url = "http://localhost:8080/transaction";
    let user = "rehan";
    let wallet = document.querySelector(".wallet").value;
    const data = {
        "wallet_name": wallet,
        "username": user,
        "transaction_amount": amount,
        "transaction_title": title,
        "transaction_date": date,
        "transaction_category": category
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'wallet_name_header':'savings'
            },
            body: JSON.stringify(data)
        });
        console.log('Response Status:', response.status);
    } catch (error) {
        console.error('Error:', error);
    }
}
