/* globals Chart:false, feather:false 

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
*/

function select(el) {
  return document.querySelector(el)
}
var classroom = select('#classroom');
var work_area = select('.workArea');
var dhm = select('.dhm');
var dht = select('.dht');
var classRow = select('.classRow');

classroom.addEventListener('click', manageClassrooms);
dhm.addEventListener('click', dhmClasses);
dht.addEventListener('click', dhtclasses);

function manageClassrooms() {
	work_area.innerHTML = '<h2> this is working </h2>';
  console.log("working");
}
function dhmClasses() {
  classesRow.innerHTML= '<h3> Classes working fine</h3> <br /> new line';
}
function dhtclasses() {
  classesRow.innerHTML= '<h3> dht Classes working fine</h3> <br /> new line';
}
