<template>
    <section class='polar-chart'>
        <highcharts :options="options" :Highcharts="Highcharts" ref='N650CurrentChart'></highcharts>
    </section>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import * as data from '../assets/N650CurrentChart.js'
import axios from 'axios'

export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: data.N650CurrentChart,
      highchartsMore: highchartsMore
    }
  },
  mounted () {
    this.getCurrentsPhases()
    setInterval(this.getCurrentsPhases, 60000)
  },
  methods: {
    getCurrentsPhases: function () {
      axios.get('http://localhost:8080/load_currents_phases').then(response => {
        this.options.series[0].data = [0, response.data.ca]
        this.options.series[0].pointStart = (-1) * response.data.pa - 1
        this.options.series[1].data = [0, response.data.cb]
        this.options.series[1].pointStart = (-1) * response.data.pb - 1
        this.options.series[2].data = [0, response.data.cc]
        this.options.series[2].pointStart = (-1) * response.data.pc - 1
      })
    }
  }
}
</script>

<style>
.polar-chart {
  width: 300px;
  margin: 10px;
  padding: 0;
  text-align: center;
}
</style>
