// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as firebase from 'firebase'

// Vue.use(Vuex)

// export const store = new Vuex.Store({

//     state: {

//         user:{
//             id: 'sadasdas'

//         }

//     },

//     mutations:{
//         setUser (state, payload){
//             state.user = payload
//         }
//     },

//     actions: {
        
//         signUserUp  ({commit}, payload){
//             console.log('broodje')
//             firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
//             .then(
//                 user => {
//                     const newUser = {
//                         id: user.uid
//                     }
//                     commit('setUser', newUser)
//                 }
//             )
//         .catch(
//             error =>{
//                 console.log('broodje1')
//                 console.log(error);
//             }
//         )
//     }
// }

// });