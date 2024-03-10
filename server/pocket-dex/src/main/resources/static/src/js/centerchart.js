// getting data 

const url = "http://localhost:8080/transaction";  

let transaction_data;
  
function fetchData() {
  return fetch(`${url}`)
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

  

const ctx = document.getElementById('row2-chart');
const ctxContext = ctx.getContext("2d");

fetchData().then(data => {

const uniqueDates = [...new Set(data.map(trans=> trans.transaction_date))];
// Sort dates in descending order
uniqueDates.sort((a, b) => new Date(b) - new Date(a));
// Get the last 7 recent dates
const recentDates = uniqueDates.slice(0, 7);
// Filter transactions corresponding to recent dates
// const recentTransactions = data.filter(trans => recentDates.includes(trans.transaction_date));

const recentDatesAmount = recentDates.map(date => {
  // Filter transactions for the current date
const transactionsForDate = data.filter(trans => trans.transaction_date === date);
  
  // Sum up transaction amounts for the current date
  const totalAmountForDate = transactionsForDate.reduce((total, trans) => total + trans.transaction_amount, 0);
  
  return totalAmountForDate;
});
recentDates.reverse();
recentDatesAmount.reverse();
console.log("Recent Dates Amount:", recentDatesAmount);
console.log("Recent Dates:", recentDates);

var gradient = ctxContext.createLinearGradient(0, 0, 0, ctx.height*1.3);
gradient.addColorStop(0, 'rgba(232,241,103,0.7)');   
gradient.addColorStop(0.3,'rgba(232,241,103,0.5)');
gradient.addColorStop(0.7,'rgba(232,241,103,0.3)');
gradient.addColorStop(1, 'rgba(232,241,103,0.1)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: recentDates,
      datasets: [{
        label: 'Amount Spent',
        fill:true,
        // fillColor:'#E8F167',
        backgroundColor: gradient,
        data: recentDatesAmount,
        borderWidth: 3,
        borderColor : '#E8F167'
      }]
    },
    options: {
      responsive:true,
      scales: {
        y: {
          beginAtZero: true,
          grid:{
            color:'rgb(75 85 99)'
          },
          ticks:{
            color:'rgb(209 213 219)'
          }
        },
        x:{
          grid:{
            display:false
          },
          ticks:{color:'rgb(209 213 219)'}
        }
      },plugins:{legend:{labels:{color:'rgb(209 213 219)'}}},
      animations:{
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      }

      
    }
  });


}
)

