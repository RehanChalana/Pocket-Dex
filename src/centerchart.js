const ctx = document.getElementById('row2-chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      borderColor : '#E8F167'
    }]
  },
  options: {
    responsive:true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});