<template>
  <ion-app>
    <router-view/>
  </ion-app>
</template>

<script>
import { Plugins } from '@capacitor/core'
const { Device, PushNotifications } = Plugins

export default {
  name: 'App',
  data () {
    return {
      notificaions: [],
      mobile: {}
    }
  },
  created () {
    PushNotifications.addListener('registrationError', (error) => { console.log(error) })
    PushNotifications.addListener('registration', (token) => {
      this.mobile.pnToken = token.value
      Device.getInfo().then((data) => {
        this.mobile.devUUID = data.uuid
        this.mobile.platform = data.platform
      }).then(() => {
        window.localStorage.setItem('mobile', JSON.stringify(token.value))
        // this.auth.saveUser(this.user)
        PushNotifications.addListener('pushNotificationReceived', (notification) => { console.log(notification) })
      })
    })
    PushNotifications.register()
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed:300');
  @import "./scss/_font.scss";
  @import "./scss/_type.scss";
  @import "./scss/_colors.scss";
  @import "./scss/_font.scss";
  ion-page{ 
    flex: 1;
  }
</style>
