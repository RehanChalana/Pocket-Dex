

// updating dashboard date 

const currentDate = new Date();
let curDay = currentDate.getDate();
let curMonth = currentDate.getMonth() + 1; // Months are zero-based
let curYear = currentDate.getFullYear();

if(curDay<10) {
  curDay = `0${curDay}`;
}
if(curMonth<10) {
  curMonth = `0${curMonth}`
}
const mainBodyDateContainer = document.querySelector(".main-body-date-text");
mainBodyDateContainer.innerHTML=`${curDay}-${curMonth}-${curYear}`;

// updating dashboard

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
                'wallet_name_header':'saving_testing2'
            },
            body: JSON.stringify(data)
        });
        console.log('Response Status:', response.status);
    } catch (error) {
        console.error('Error:', error);
    }

    location.reload();
}


// updating transaction-history small version !
const row_3_h_list = document.querySelector(".row3-h-list");
fetchData().then(data => {
  data.sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date));
  const topThreeRecentTransactions = data.slice(0, 3);
  for(let i in topThreeRecentTransactions) {
    let row3_h_list_entry = document.createElement("div");
    row3_h_list_entry.classList.add("row3-h-list","flex-col","max-h-14","text-ellipsis" , "overflow-hidden");
    row3_h_list_entry.innerHTML=`<div class="row3-list-entry flex justify-between py-1">
    <div class="list-entry-left w-28">
        <div class="entry-name text-white font-semibold">${topThreeRecentTransactions[i].transaction_title}</div>
        <div class="entry-date text-slate-300">${topThreeRecentTransactions[i].transaction_date}</div>
    </div>
    <div class="list-entry-right w-20">
        <div class="entry-amount text-white font-semibold">Rs ${topThreeRecentTransactions[i].transaction_amount}</div>
        <div class="entry-category text-slate-300">${topThreeRecentTransactions[i].transaction_category}</div>
    </div>
</div>`;
row_3_h_list.appendChild(row3_h_list_entry); 
}
  // console.log(topThreeRecentTransactions);
})


// updating data on mouse clicks!

