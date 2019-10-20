import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration

const config = {
  apiKey: "AIzaSyDru3nxMSNf53TBN39_fpPVTwaFV3240Vw",
  authDomain: "my-address-pj-e1e87.firebaseapp.com",
  databaseURL: "https://my-address-pj-e1e87.firebaseio.com",
  projectId: "my-address-pj-e1e87",
  storageBucket: "",
  messagingSenderId: "874972847333",
  appId: "1:874972847333:web:4fbf7b84ad49b794d1c80c"
};
// Initialize Firebase
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
