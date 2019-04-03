<template>
  <modal title="Pagamento">
    <div>
      <h4>Informe os dados do Cartão para pagamento</h4>
    </div>
    <div>

    </div>
    <div>
      <div class="header-container">
        <div class="header-bg" :style="{'background-color': bgc}"></div>
        <header class="header">

          <div class="card-wrapper">
            <card v-model="cardDetail"></card>
          </div>

          <input name="number" placeholder="Card number" type="tel" v-model="cardDetail.number" v-card-focus>
          <input name="name" placeholder="Full name" type="text" v-model="cardDetail.name" v-card-focus>
          <input name="expiry" placeholder="MM/YY" type="tel" v-model="cardDetail.expiry" v-card-focus>
          <input name="cvc" placeholder="CVC" type="number" v-model="cardDetail.cvc" v-card-focus>
        </header>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue'
import card from '@codeanker/vue-credit-card'

let defaultProps = {
  number: '4532117080573700',
  name: 'Comprador T Cielo',
  expiry: '12/2018',
  cvc: '123'
}

export default {
  name: 'CreditCardModal',
  components: {
    Modal, card
  },
  data () {
    return {
      cardDetail: defaultProps
    }
  },
  methods: {
    testeFechar () {
      this.$ionic.modalController.dismiss()
    }
  },
}
</script>

<style scoped>
p,
ul {
  color: var(--beep-light-dark);
  font-size: 14px;
  letter-spacing: -0.34px;
  line-height: 26px;
  margin-bottom: 15px;
}

ul {
  padding-left: 30px;
}

h1 {
  color: var(--beep-dark);
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.6px;
  line-height: 1.5;
}
</style>
