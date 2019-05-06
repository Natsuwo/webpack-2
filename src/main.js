import Vue from 'vue'
import Contact from './controllers/contacts/Contact'
import App from './App.vue'

Vue.component('contact-component', Contact);

new Vue({
  el: '#app',
  render: h => h(App)
})
