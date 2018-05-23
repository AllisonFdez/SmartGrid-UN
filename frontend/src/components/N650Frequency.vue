<template>
  <div>
    <span class="info-box-icon bg-navy">
      <scale-loader :loading='true' color='#ffffff' height='25px' width='4px' margin='2px'></scale-loader>
    </span>
    <span class="info-box-freq"><b>{{ frequency.freq }}</b></span>
    <span class="info-box-pf">Φ Pf: {{ frequency.pf }}</span>
  </div>
</template>

<script>
import { ScaleLoader } from 'vue-spinner/dist/vue-spinner.min.js'
import axios from 'axios'
export default {
  components: {
    ScaleLoader
  },
  mounted () {
    this.getFrequency()
    setInterval(this.getFrequency, 60000)
  },
  data () {
    return {
      frequency: ''
    }
  },
  methods: {
    getFrequency: function () {
      axios.get('http://104.236.0.105:8080/load_frequency').then(response => {
        this.frequency = response.data
        console.log('Frequency', this.frequency)
      })
    }
  }
}
</script>
