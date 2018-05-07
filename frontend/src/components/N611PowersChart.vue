<template>
  <section class='dynamic-chart'>
      <highcharts :options="options" :Highcharts="Highcharts" ref='dynamicChart' ></highcharts>
  </section>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import * as data from '../assets/data.js'

export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: data.dynamicChart
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
