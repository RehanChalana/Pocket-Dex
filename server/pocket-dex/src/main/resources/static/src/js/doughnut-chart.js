const doughnutChart = document.querySelector("#bottom-doughnut-chart");
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
        maxItems: 1, // Display only one item per row
        labels: {
          boxWidth: 20,
          padding: 20
        }
      }
    },
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});