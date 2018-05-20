<template>
<div>
  <div class="info-box-report">
    <span class="info-box-icon-off bg-5"><i class="material-icons">flash_on</i></span>
    <div class="info-box-content-report">
      <span class="info-box-text-power">Energies</span>
    </div>
  </div>
  <div class="info-box-text">
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-6"><b>P</b></span><span class="info-box-number">{{ energies.watth }} <span class="info-box-units">kWh</span></span>
    </div>
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-7"><b>S</b></span><span class="info-box-number">{{ energies.vash }} <span class="info-box-units">kVAh</span></span>
    </div>
    <div class="info-box-content-report">
      <span class="info-box-icon-data bg-8"><b>Q</b></span><span class="info-box-number">{{ energies.varh }} <span class="info-box-units">kVARh</span></span>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    this.getEnergies()
    setInterval(this.getEnergies, 60000)
  },
  data () {
    return {
      energies: ''
    }
  },
  methods: {
    getEnergies: function () {
      axios.get('http://104.236.0.105:8080/load_energies').then(response => {
        this.energies = response.data
      })
    }
  }
}
</script>
