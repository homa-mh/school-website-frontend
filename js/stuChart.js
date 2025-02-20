// منبع : https://abhijeetpratap.com/posts/stacked-bar-chart-in-chart-js/

let scores = document.getElementsByClassName('score')
let ctx = document.getElementById('stuChart');
//  Chart.register(ChartDataLabels);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['ریاضی3', 'فیزیک3', 'شیمی3', 'هندسه3', 'حسابان2', 'ریاضیات گسسته', 'ادبیات فارسی', 'عربی', 'زبان انگلیسی', 'دینی'],
      datasets: [{
        label: 'نمره دانش آموز', backgroundColor: '#3a63a8',
        data: [(Number)(scores[0].innerHTML), (Number)(scores[1].innerHTML), (Number)(scores[2].innerHTML),
        (Number)(scores[3].innerHTML), (Number)(scores[4].innerHTML), (Number)(scores[5].innerHTML),
        (Number)(scores[6].innerHTML), (Number)(scores[7].innerHTML), (Number)(scores[8].innerHTML),
         (Number)(scores[9].innerHTML)],
        
        borderWidth: 1
      },{label: 'میانگین کلاس', backgroundColor: '#050834',
        data: [18.25, 19, 13.75, 16, 19.5, 15, 18.9, 17.6, 19, 18]},
        
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