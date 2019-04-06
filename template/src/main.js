{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
import Ionic from '@ionic/vue'
import router from './router'

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
// import { Plugins } from '@capacitor/core'

library.add(faUserNinja, faUserSecret, faSearchLocation, faUserCircle, faKey, faFilePdf, faSignOutAlt, faArrowAltCircleRight, faSave)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// register globally
Vue.component('multiselect', Multiselect)
Vue.component('vue-multiselect', window.VueMultiselect.default)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

Vue.use(Ionic)

library.add(faUserNinja, faUserSecret, faSearchLocation, faUserCircle, faKey, faFilePdf, faSignOutAlt, faArrowAltCircleRight, faSave)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// register globally
Vue.component('multiselect', Multiselect)
Vue.component('vue-multiselect', window.VueMultiselect.default)

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

Vue.use(VueTheMask)
Vue.use(Ionic)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
