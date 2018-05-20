export const N650VoltageChart = {
  chart: {
    polar: true,
    style: {
      fontWeight: 'bold'
    }
  },
  title: {
    text: 'Normalized Phase Voltages Report'
  },
  pane: {
    startAngle: -30
  },
  credits: {
    enabled: false
  },
  xAxis: {
    tickInterval: 120,
    min: -120,
    max: 240,
    labels: {
      enabled: true,
      formatter: function () {
        return (-1) * (this.value) + '°'
      },
      rotation: 0
    }
  },
  yAxis: {
    tickInterval: 0.05,
    min: 0.9,
    max: 1.1,
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
    name: 'Vab',
    color: '#981914',
    pointStart: 0,
    data: []
  },
  {
    type: 'line',
    name: 'Vbc',
    color: '#F28F3F',
    pointStart: -120,
    data: []
  },
  {
    type: 'line',
    name: 'Vca',
    color: '#ECBE14',
    pointStart: 120,
    data: []
  }]
}
