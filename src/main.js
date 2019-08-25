// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fireabse from 'firebase'


Vue.config.productionTip = false

let app = null;

// wait for fireabse auth to init before creating app
fireabse.auth().onAuthStateChanged(() => {
  
  // init app if not already created
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  } 
  
})

/* eslint-disable no-new */
