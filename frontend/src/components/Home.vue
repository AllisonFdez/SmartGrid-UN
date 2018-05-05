<template>
<v-layout justify-center>
    <v-card class="Grid">
        <img v-bind:src="url"/>
         <v-card class="red220">
         </v-card>
         <v-card class="n650" @click.native.stop="dialog650 = true">
             <v-dialog v-model="dialog650" width="80%">
                <node650 />
             </v-dialog>
         </v-card>
        <v-dialog v-model="dialog611" fullscreen transition="dialog-bottom-transition" :overlay="false">
         <v-card class="n611" slot="activator"></v-card>
         <v-card>
           <v-toolbar dark color="primary">
             <v-btn icon @click.native="dialog611 = false" dark>
               <v-icon>close</v-icon>
             </v-btn>
             <v-toolbar-title>Node 611 Dashboard</v-toolbar-title>
           </v-toolbar>
          </v-card>
        </v-dialog>
    </v-card>
</v-layout>
</template>

<script>
import Node650 from '../components/Node650.vue'
export default {
  components: {
    Node650
  },
  data () {
    return {
      url: '/static/diagram_smart_grid.png',
      dialog650: false,
      dialog611: false
    }
  }
}
</script>

<style scoped>
.red220 {
  position: absolute;
  background-color: red;
  top: 50px;
  bottom: 0;
  right: 0;
  left: 232px;
  width: 88px;
  max-height: 66px;
  cursor: pointer;
}
.n650 {
  position: absolute;
  background-color: yellow;
  top: 45px;
  bottom: 0;
  right: 0;
  left: 367px;
  width: 19px;
  max-height: 78px;
  cursor: pointer;
}
.n611 {
  position: absolute;
  background-color: green;
  top: 555px;
  bottom: 0;
  right: 0;
  left: 50px;
  width: 70px;
  max-height: 67px;
  cursor: pointer;
}
</style>
