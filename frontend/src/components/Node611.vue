<template>
<section class="content-all">
  <div class="box-header"></div>
  <div class="row">
    <div class="col-md-3 col-sm-6 col-sm-offset-7 col-xs-12">
      <n611-last-update class="info-box"/>
    </div>
    <div class="col-md-2 col-sm-6 col-xs-12">
      <n611-charge class="info-box"/>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 col-sm-10 col-xs-12">
      <div class="box-dynamic">
        <p class="text-center" >
         <n611-powers-chart />
        </p>
      </div>
    </div>
    <div class="col-md-2 col-sm-6 col-xs-12">
      <div class="box-powers611">
        <p class="text-center" >
          <n611-powers />
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import N611LastUpdate from '../components/N611LastUpdate.vue'
import N611Charge from '../components/N611Charge.vue'
import N611PowersChart from '../components/N611PowersChart.vue'
import N611Powers from '../components/N611Powers.vue'
export default {
  components: {
    N611LastUpdate,
    N611Charge,
    N611PowersChart,
    N611Powers
  }
}
</script>

<style scoped>
.info-box {
  cursor: pointer;
  min-height:89px;
  width: 80%;
  align-content: center
}
.text-center-chart {
  margin-left: 30px
}
.content-all{
  overflow-x: hidden;
}
.info-box-report-611{
  display:block;min-height:70px;background:#fff;width:70%;box-shadow:0 1px 1px rgba(0,0,0,0.1);border-radius:2px;margin-bottom:15px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.material-icons{
  font-size: 50px
}
</style>
