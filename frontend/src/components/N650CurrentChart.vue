<template>
    <section class='polar-chart'>
        <highcharts :options="options" :Highcharts="Highcharts" ref='polarCharts'></highcharts>
    </section>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import * as data from '../assets/data.js'

export default {
  components: {
    VueHighcharts
  },
  data () {
    return {
      options: data.currentsData,
      highchartsMore: highchartsMore
    }
  },
  mounted () {},
  methods: {
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
