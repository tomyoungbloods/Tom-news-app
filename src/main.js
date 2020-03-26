import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import vuetify from './plugins/vuetify'
import router from './router/index.js'



Vue.config.productionTip = false



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBdVoHh65AwW9YySf2eU-ebcGs4_B1G0kQ",
    authDomain: "tom-news-app.firebaseapp.com",
    databaseURL: "https://tom-news-app.firebaseio.com",
    projectId: "tom-news-app",
    storageBucket: "tom-news-app.appspot.com",
    messagingSenderId: "628104975497",
    appId: "1:628104975497:web:04a6aef076de1e05d0a258",
    measurementId: "G-7M1JBS7SLT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  let app;

  firebase.auth().onAuthStateChanged(user=> {
    console.log(user);
    if(!app) {
      app = new Vue({
        vuetify,
        router,
        render: h => h(App),
      
      }).$mount('#app')
    }
  })




