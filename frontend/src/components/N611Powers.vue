<template>
<div>
  <div class="info-box-report-611">
    <span class="info-box-icon-power bg-6"><i class="material-icons sz-0">flash_on</i></span>
    <div class="info-box-content">
      <span class="info-box-power">{{ N611Powers.red }} W</span>
      <span class="info-box-text-data">Red</span>
    </div>
  </div>
  <div class="info-box-report-611">
    <span class="info-box-icon-power bg-6"><i class="material-icons sz-0">wb_sunny</i></span>
    <div class="info-box-content">
      <span class="info-box-power">{{ N611Powers.panel }} W</span>
      <span class="info-box-text-data">Panel</span>
    </div>
  </div>
  <div class="info-box-report-611">
    <span class="info-box-icon-power bg-6"><i class="material-icons sz-0">battery_unknown</i></span>
    <div class="info-box-content">
      <span class="info-box-power">{{ N611Powers.batteries }} W</span>
      <span class="info-box-text-data">Battery</span>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    this.getN611Powers()
    setInterval(this.getN611Powers, 60000)
  },
  data () {
    return {
      N611Powers: ''
    }
  },
  methods: {
    getN611Powers: function () {
      axios.get('http://localhost:8080/load_node_powers').then(response => {
        this.N611Powers = response.data
        console.log('N611Powers', this.N611Powers)
      })
    }
  }
}
</script>

<style>
.info-box-report-611{
  margin-bottom: 25px;
}
</style>
