import Highcharts from 'highcharts/highstock'

export let basicData = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Monthly Average Voltages'
  },
  subtitle: {
    text: '[V]'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
  },
  yAxis: {
    title: {
      text: 'Voltages'
    },
    labels: {
      formatter: function () {
        return this.value
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: []
}

export let asyncData = {
  name: 'Red',
  marker: {
    symbol: 'square'
  },
  data: [
    7.0,
    6.9,
    9.5,
    14.5,
    18.2,
    21.5,
    25.2,
    23.3,
    18.3,
    13.9,
    9.6
  ]
}

export const voltagesChart = {
  chart: {
    polar: true,
    style: {
      fontWeight: 'bold'
    }
  },
  title: {
    text: 'Phase Voltages Report'
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
        return this.value + '°'
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
    series: {
      pointStart: 0,
      pointInterval: 45
    },
    column: {
      pointPadding: 0,
      groupPadding: 0
    }
  },
  series: [{
    type: 'line',
    name: 'Vab',
    data: [1, 0.95, 1.05]
  }]
}

export const currentsData = {
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
    startAngle: -30
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
    tickInterval: 120,
    min: -120,
    max: 240,
    rotation: 45,
    labels: {
      enabled: true,
      formatter: function () {
        return this.value + '°'
      }
    }
  },
  yAxis: {
    tickInterval: 2,
    min: 0,
    max: 12,
    labels: {
      enabled: true
    }
  },
  plotOptions: {
    series: {
      pointStart: 0,
      pointInterval: 120
    },
    column: {
      pointPadding: 0,
      groupPadding: 0
    }
  },
  series: [{
    type: 'line',
    name: 'Phase A [A]',
    color: '',
    data: [2, 4, 6, 8, 10]
  }]
}

export const dynamicChart = {
  chart: {
    type: 'spline',
    animation: Highcharts.svg,
    marginRight: 10,
    style: {
      fontWeight: 'bold'
    },
    events: {
      load: function () {
        var series = this.series[0]
        setInterval(function () {
          var x = new Date().getTime()
          var y = Math.random()
          series.addPoint([x, y], true, true)
        }, 1000)
      }
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
    tickPixelInterval: 50
  },
  yAxis: {
    title: {
      text: 'Value'
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: '#808080'
      }
    ]
  },
  tooltip: {
    formatter: function () {
      return (
        '<b>' +
        this.series.name +
        '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
        '<br/>' +
        Highcharts.numberFormat(this.y, 2)
      )
    }
  },
  legend: {
    enabled: true
  },
  exporting: {
    enabled: true
  },
  series: [{
    name: 'Random data',
    data: (function () {
      var data = []
      var time = new Date().getTime()
      var i
      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        })
      }
      return data
    })()
  }
  ],
  navigator: {
    enabled: true,
    adaptToUpdatedData: true
  }
}
