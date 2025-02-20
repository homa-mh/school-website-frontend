// منبع : https://abhijeetpratap.com/posts/stacked-bar-chart-in-chart-js/


let classChart = document.getElementById('classChart');
//  Chart.register(ChartDataLabels);

  new Chart(classChart, {
    type: 'bar',
    data: {
      labels: ['کلاس1', 'کلاس2', 'کلاس3', 'کلاس4', 'کلاس5', 'کلاس6', 'کلاس7'],
      datasets: [{
        label: 'میانگین نمره کلاس ها', backgroundColor: '#050834',
        data: [15, 18, 16.5, 19, 17.8, 19.5, 18],
        
        borderWidth: 1
      },
        
]
    },
    options: { 
plugins:
{datalabels: {align: 'top', anchor: 'end', color:'#050834', font: { size: 10 }},
}, 
      scales: {
        x: {stacked: false},
        y: {
          beginAtZero: true, stacked: false
        }
      }
    }
  });