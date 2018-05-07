<template>
  <div class="info-box-report-last">
     <span class="info-box-text-data">{{ LastDay }}</span>
     <span class="info-box-hour">{{ LastHour }}</span>
     <span class="info-box-text-data">
        <div class="info-box-icon-last">
          <beat-loader :loading='true' color='#000000' height='25px' width='4px' margin='2px'></beat-loader>
        </div>
        Last Update
     </span>
  </div>
</template>

<script>
import axios from 'axios'
import { BeatLoader } from 'vue-spinner/dist/vue-spinner.min.js'
export default {
  components: {
    BeatLoader
  },
  mounted () {
    this.getLastUpdate()
  },
  data () {
    return {
      LastDay: '',
      LastHour: ''
    }
  },
  methods: {
    getLastUpdate: function () {
      axios.get('http://localhost:8080/load_node_powers').then(response => {
        this.LastDay = response.data.createdAt.slice(0, 10)
        this.LastHour = response.data.createdAt.slice(11, 19)
        console.log('N611Powers', this.LastUpdate)
      })
    }
  }
}
</script>
