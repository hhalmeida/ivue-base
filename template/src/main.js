{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
import Ionic from '@ionic/vue'
{{#router}}
import router from './router'
{{/router}}

// Ionic core styles and theming
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'

// Font
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserNinja, faUserSecret, faSearchLocation, faUserCircle, faKey, faFilePdf, faSignOutAlt, faArrowAltCircleRight, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Libs
import Multiselect from 'vue-multiselect'
import VueTheMask from 'vue-the-mask'

// Capacitor
import { Plugins } from '@capacitor/core'
const { SplashScreen } = Plugins

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
