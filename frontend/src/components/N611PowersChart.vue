<template>
  <section class='dynamic-chart'>
      <highcharts :options="options" :Highcharts="Highcharts" ref='N611PowersChart' ></highcharts>
  </section>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import * as data from '../assets/N611PowersChart.js'
import axios from 'axios'

export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: data.N611PowersChart
    }
  },
  mounted () {
    this.getN611Powers()
    setInterval(this.getN611Powers, 60000)
  },
  methods: {
    getN611Powers: function () {
      axios.get('http://104.236.0.105:8080/load_node_powers').then(response => {
        this.options.series[0].data.push(response.data.red)
        this.options.series[1].data.push(response.data.panel)
        this.options.series[2].data.push(response.data.batteries)
        this.options.xAxis.categories.push([response.data.createdAt.slice(0, 10), response.data.createdAt.slice(11, 19)]).limit(2)
        this.options.navigator.xAxis.categories.push(response.data.createdAt.slice(11, 19))
      })
    }
  }
}
</script>

<style>
.dynamic-chart {
  width: 1000px;
  height: auto;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}
</style>
