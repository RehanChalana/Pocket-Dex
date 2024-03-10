const row3chart = document.getElementById('row3-chart');

fetchData().then( data => {
const sortedData = data.sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date));
const uniqueDates = new Set();
const dates = [];
const frequencies = [];
for (const transaction of sortedData) {
    if (uniqueDates.size === 5) break;
    if (!uniqueDates.has(transaction.transaction_date)) {
        uniqueDates.add(transaction.transaction_date);
        dates.push(transaction.transaction_date);
        frequencies.push(1);
    } else {
        const index = dates.indexOf(transaction.transaction_date);
        frequencies[index]++;
    }
}
// Output the results
console.log("Dates array:", dates);
console.log("Frequencies array:", frequencies);



  new Chart(row3chart, {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [{
        label: '# of transactions',
        data: frequencies,
        borderWidth: 3,
        borderColor: ['#8BF167','#1DAFA6'],
        fill:true,
        borderRadius:25,
        backgroundColor : ['rgba(139,241,103,0.2)','rgba(29,175,166,0.2)'],
        barPercentage:0.7,
        // barThickness:25
      }]
    },
    options: {
        responsive:true,
      scales: {
        y: {
          beginAtZero: true,
          grid:{color:'rgb(75 85 99)'},
          ticks:{color:'rgb(209 213 219)'}
        },
        x: {
          grid:{display:false},
          ticks:{color:'rgb(209 213 219)'}
        }
      }, animations:{
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
});
  
  
  


  