<template>
    <section class='polar-chart'>
        <highcharts :options="options" :Highcharts="Highcharts" ref='N650VoltageChart'></highcharts>
    </section>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import * as data from '../assets/N650VoltageChart.js'
import axios from 'axios'

export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: data.N650VoltageChart,
      highchartsMore: highchartsMore
    }
  },
  mounted () {
    this.getLineVoltagesAndPhasesNor()
    setInterval(this.getLineVoltagesAndPhasesNor, 60000)
  },
  methods: {
    getLineVoltagesAndPhasesNor: function () {
      axios.get('http://104.236.0.105:8080/load_line_voltages_nor').then(response => {
        this.options.series[0].data = [0.9, response.data.vab_n]
        this.options.series[1].data = [0.9, response.data.vbc_n]
        this.options.series[2].data = [0.9, response.data.vca_n]
      })
    }
  }
}
</script>

<style>
.polar-chart {
  width: 300px;
  margin: 5px;
  padding: 0;
  text-align: center;
}
</style>
