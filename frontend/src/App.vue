<template>
  <div id="app">
    <v-app>
      <v-toolbar class="header" dark color="bg-navy">
       <v-toolbar-title class="title">Smart grid IEEE13</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-btn icon class="icon-tool">
       </v-btn>
      </v-toolbar>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.icon-tool {
  margin-top: 0px;
  -moz-box-align: center
}
.title {
  margin-top: 0px;
}
.header {
  margin-top: 0px;
  width: auto;
  height: 60px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255, 255, 255);
}
.highcharts {
  display: inline-block;
  margin: 2em auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
  padding: 1.5em 0em;
  background: #fff;
}
</style>
