import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import './styles/main.styl'
import vueCountryRegionSelect from 'vue-country-region-select'
import axios from 'axios'
Vue.use(vueCountryRegionSelect)
Vue.use(BootstrapVue)
Vue.prototype.$http = axios
Vue.config.productionTip = false
import VueMeta from 'vue-meta'

Vue.use(VueMeta  )


// const { generate } = VueMeta



// function(cookie_name) {
//   var matches = this.document_cookies.filter(function(el) {
//     return el.key == cookie_name;
//   });
//   if (matches.length > 0) {
//     return matches[0].value;
//   }
//   return '';
// },

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


