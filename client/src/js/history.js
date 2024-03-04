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