const params = {user_id: 1};

const url = "http://localhost:8080/transaction";  

let transaction_data;
  
  // Convert parameters to query string
  const queryString = new URLSearchParams(params).toString();
  
  // Make a GET request with parameters
  fetch(`${url}?${queryString}`)
    .then(response => {
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse JSON data from the response body
      return response.json();
    })
    .then(data => {
      // Store JSON data in a variable
      transaction_data = data;
      console.log(transaction_data); // Do whatever you want with the JSON data
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });


// updating history list
const historyListContainer = document.querySelector(".history-list");

for(let key in transaction_data) {
    let listEntry = document.createElement("div");
    listEntry.classList.add("history-list-entry","flex","justify-between","px-4","py-3","text-gray-300","text-medium","font-medium","rounded-xl","items-center");
    listEntry.innerHTML = '<div class=history-entry-options-icon"><i class="fa-solid fa-ellipsis-vertical fa-lg"></i></div>
                           <div class="history-entry-date">${transaction_data[key]['transaction_date']}</div>
                           <div class="history-entry-name">${transaction_data[key]['transaction_title']}div>
                           <div class="history-entry-wallet">Rc's Wallet</div>
                           <div class="history-entry-amount">${transaction_data[key]['transaction_amount']</div>
                           <div class="history-entry-check text-gray-800 px-2 py-1 font-semibold rounded-lg">Completed</div>';
    historyListContainer.appendChild(listEntry);

}

