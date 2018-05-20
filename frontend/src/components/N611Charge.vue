<template>
<div class="info-box-report-last">
  <span class="info-box-text-data">
    <i class="fas fa-sync-alt"></i> State of non-essential charge:
  </span>
  <span class="info-box-hour">
    <div :class="selectCSS" style="font-size: 45px"><i :class="classIcon"></i></div>
  </span>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      control: ''
    }
  },
  mounted () {
    this.getControl()
    setInterval(this.getControl, 60000)
  },
  methods: {
    getControl: function () {
      axios.get('http://104.236.0.105:8080/load_control').then(response => {
        this.control = response.data
      })
    }
  },
  computed: {
    selectCSS: function () {
      var css = 'state-on'
      if (this.control.state === 0) {
        css = 'state-off'
      }
      return css
    },
    classIcon: function () {
      var icon = 'far fa-lightbulb'
      if (this.control.state === 0) {
        icon = 'fas fa-lightbulb'
      }
      return icon
    }
  }
}
</script>
