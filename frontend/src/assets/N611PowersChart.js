import Highcharts from 'highcharts/highstock'

export const N611PowersChart = {
  chart: {
    type: 'spline',
    animation: Highcharts.svg,
    marginRight: 10,
    style: {
      fontWeight: 'bold'
    }
  },
  title: {
    text: 'Powers Report'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    type: 'datetime',
    categories: [],
    tickPixelInterval: 50
  },
  yAxis: {
    title: {
      text: 'Magnitude'
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: '#808080'
      }
    ]
  },
  scrollbar: {
    enabled: true
  },
  tooltip: {
    shared: true,
    crosshairs: true
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: true
  },
  series: [{
    name: 'Red [W]',
    turboThreshold: 10,
    color: '#981914',
    data: []
  }, {
    name: 'Solar Panel [W]',
    turboThreshold: 10,
    color: '#F28F3F',
    data: []
  }, {
    name: 'Batteries [W]',
    turboThreshold: 10,
    color: '#ECBE14',
    data: []
  }],
  navigator: {
    xAxis: {
      minRange: 1,
      categories: []
    },
    enabled: true,
    adaptToUpdatedData: false
  }
}
