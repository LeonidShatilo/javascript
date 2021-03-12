const CHART = document.getElementById('сhart').getContext('2d');

export let gaussianChart = new Chart(CHART, {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Quantity',
        backgroundColor: 'rgb(147, 217, 196)',
        borderColor: 'rgb(143, 204, 186)',
      },
    ],
  },
});

export function addDataChart(chart, label, data) {
  chart.data.labels = label;
  chart.data.datasets[0].data = data;
  chart.update();
}

export function removeDataChart(chart) {
  chart.data.labels.length = 0;
  chart.data.datasets[0].data.length = 0;
  chart.update();
}
