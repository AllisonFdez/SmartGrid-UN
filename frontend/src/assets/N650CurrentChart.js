export const N650CurrentChart = {
  chart: {
    polar: true,
    style: {
      fontWeight: 'bold'
    }
  },
  title: {
    text: 'Currents Report'
  },
  pane: {
    startAngle: -90
  },
  credits: {
    enabled: false
  },
  legend: {
    itemStyle: {
      color: '#000000'
    }
  },
  xAxis: {
    tickInterval: 20,
    min: -180,
    max: 180,
    labels: {
      rotation: 0,
      enabled: true,
      formatter: function () {
        return (-1) * (this.value) + '°'
      }
    }
  },
  yAxis: {
    tickInterval: 2,
    min: 0,
    max: 14,
    labels: {
      enabled: true
    }
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      groupPadding: 0
    }
  },
  series: [{
    type: 'line',
    name: 'Ca [A]',
    color: '#981914',
    data: [],
    pointStart: ''
  },
  {
    type: 'line',
    name: 'Cb [A]',
    color: '#F28F3F',
    data: [],
    pointStart: ''
  },
  {
    type: 'line',
    name: 'Cc [A]',
    color: '#ECBE14',
    data: [],
    pointStart: ''
  }]
}
