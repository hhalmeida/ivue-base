<template>
  <ion-page class="ion-page" main>
    <ion-header v-if="isHeader">
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons v-if="showBackButton" slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-content" padding>
      <slot />
    </ion-content>
    <ion-footer>
      <div class="footer-text">IVUE Base by</div>
      <a href="" target="_blank">
        <img src="" class="modus-labs-logo" alt="Modus Labs Logo" />
      </a>
    </ion-footer>
  </ion-page>
</template>

<script>
export default {
  name: 'IonVuePage',
  props: {
    isHeader: false,
    title: { type: String, default: '' },
    showBackButton: { type: Boolean, default: true },
  },
}
</script>

<style lang='scss' scoped>
ion-header{
  ion-toolbar{
    background: #ffae00 !important;
    --background: #ffae00 !important;
    color:white;
  }
}
.footer-text {
  font-size: 80%;
  margin: 10px 0;
  text-align: center;
}
.modus-labs-logo {
  display: block;
  margin: 0 auto 10px auto;
  width: 9.6825rem;
}
</style>