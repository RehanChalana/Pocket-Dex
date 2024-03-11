const doughnutChart = document.querySelector("#bottom-doughnut-chart");


fetchData().then(data => {
  console.log(data);
  let categories = {};

    // Loop through transactions to calculate total amount spent on each category
    data.forEach(transaction => {
        const category = transaction.transaction_category;
        const amount = parseFloat(transaction.transaction_amount);

        // If category doesn't exist in categories object, create it with initial amount
        if (!categories[category]) {
            categories[category] = amount;
        } else {
            // If category already exists, add amount to its total
            categories[category] += amount;
        }
    });
    // Extract category names and corresponding amounts into separate arrays
    const categoryNames = Object.keys(categories);
    const categoryAmounts = categoryNames.map(category => categories[category]);
    console.log(categoryNames);
    console.log(categoryAmounts);


new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: categoryNames,
    datasets: [{
      data: categoryAmounts,
      borderWidth:3,
      borderColor: ['rgba(232,241,103,1)','rgba(103,241,181,1)','rgba(103,241,112,1)','rgba(241,99,163,1)','rgba(139,241,103,1)','rgba(29,175,166,1)'],
      backgroundColor : ['rgba(232,241,103,0.2)','rgba(103,241,181,0.2)','rgba(103,241,112,0.2)','rgba(241,99,163,0.2)','rgba(139,241,103,0.2)','rgba(29,175,166,0.2)'],
      
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 20
        }
      }
    },
    cutout:65,
    title: {
      display: true,
    }
  }
});
})


['rgba(232,241,103,0.2)','rgba(103,241,181,0.2)','rgba(103,241,112,0.2)','rgba(241,99,163,0.2)','rgba(139,241,103,0.2)','rgba(29,175,166,0.2)']


