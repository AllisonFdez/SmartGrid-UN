<template>
<div>
  <div class="info-box-report">
    <span class="info-box-icon-off bg-1"><i class="material-icons">power_settings_new</i></span>
    <div class="info-box-content-report">
      <span class="info-box-text-power">Powers</span>
    </div>
  </div>
  <div class="info-box-text">
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-2"><b>P</b></span>
      <span class="info-box-number"> {{ powers.watt }} <span class="info-box-units">W</span></span>
    </div>
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-3"><b>S</b></span>
      <span class="info-box-number"> {{ powers.vas }} <span class="info-box-units">VA</span></span>
    </div>
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-4"><b>Q</b></span>
      <span class="info-box-number"> {{ powers.var }} <span class="info-box-units">VAR</span></span>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    this.getPowers()
    setInterval(this.getPowers, 60000)
  },
  data () {
    return {
      powers: ''
    }
  },
  methods: {
    getPowers: function () {
      axios.get('http://104.236.0.105:8080/load_powers').then(response => {
        this.powers = response.data
      })
    }
  }
}
</script>
