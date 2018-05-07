<template>
<div class="content-all">
  <div class="box-header"></div>
  <div class="row">
    <div class="col-md-3 col-sm-6 col-sm-offset-3 col-xs-12">
        <span class="info-box-number" >Node 650 <p>Smart grid Panel Report</p></span>
    </div>
      <div class="col-md-3 col-sm-6 col-sm-offset-3 col-xs-12">
        <n650-frequency class="info-box" />
      </div>
  </div>
 <div class="row">
    <div class="col-md-4 col-sm-6 col-sm-offset-1 col-xs-12">
      <div class="box">
        <p class="text-center" >
         <n650-voltage-chart />
        </p>
      </div>
    </div>
    <div class="col-md-4 col-sm-6 col-xs-12">
      <div class="box">
        <p class="text-center">
         <n650-current-chart />
        </p>
      </div>
    </div>
    <div class="col-md-3 col-sm-8 col-xs-12">
       <div class="content-all">
        <p class="text-center">

        </p>
      </div>
      <div class="content-all">
        <p class="text-center">
         <n650-powers />
        </p>
      </div>
      <div class="content-all">
        <p class="text-center">
         <n650-energies />
        </p>
      </div>
    </div>
 </div>
</div>
</template>

<script>
import N650Frequency from './N650Frequency.vue'
import N650Powers from '../components/N650Powers.vue'
import N650Energies from '../components/N650Energies.vue'
import N650VoltageChart from '../components/N650VoltageChart'
import N650CurrentChart from '../components/N650CurrentChart'

export default {
  components: {
    N650Frequency,
    N650Powers,
    N650Energies,
    N650VoltageChart,
    N650CurrentChart
  }
}
</script>

<style scoped>
.info-box-number {
  font-size: 20px
}
.info-box {
  cursor: pointer;
  min-height:89px;
  width: 80%;
  align-content: center
}
.info-box-content {
  align-content: center;
  vertical-align: middle;
  display: inherit;
}
.info-box-icon {
  height:72px;
  width:60px;
  font-size:50px;
  line-height:70px
}
.box {
  align-content: center
}
</style>
