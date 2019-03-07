<template>
  <ion-page class='show-page'>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{headerTitle}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class='content' padding>
      <button v-on:click="getDeviceInfo()">Get Device Data</button>
      <p> {{ info }}</p> 
    </ion-content>
  </ion-page>
</template>

<script>
  import { Plugins } from "@capacitor/core";
  const { Device } = Plugins;

  export default {
    name:'DeviceInfo',
    data() {
      return {
        headerTitle: "iVue = Ionic4 + VueJS App",
        info: null
      }
    },
    methods: {
      async getDeviceInfo() {
        this.info = await Device.getInfo();
      }
    },
  }
</script>

<style lang='scss' scoped>
</style>