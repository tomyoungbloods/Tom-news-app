<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        pa-6
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                dark
                flat
              >
                <v-toolbar-title>Meld je nu aan</v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                  <span>Ik heb al een account!</span>
                </v-tooltip>
              </v-toolbar>
                <form @submit.prevent="onSignup">
                    <v-layout column wrap align-center>
                        <v-col md="12">
                        <v-text-field
                            name="email"
                            label="Mail"
                            id="email"
                            v-model="email"
                            type="email"
                            required></v-text-field>
                        </v-col>
                        
                    
                    <v-col md="12">
                        <v-text-field
                            name="Password"
                            label="Password"
                            id="password"
                            v-model="password"
                            type="password"
                            required
                            ></v-text-field>
                    </v-col>
                    <v-col md="12">
                        <v-btn type="submit">
                            Sign up
                        </v-btn>
                    </v-col>
                    </v-layout>
                </form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>



<script>
// import * as firebase from "firebase";
// import "firebase/auth";
import * as firebase from 'firebase'
export default {
    data(){
        return{
            email: '',
            password: '',
        }
    },
    computed: {
        comparePasswords () {
            return this.password !== this.confirmPassword ? 'De wachtwoorden komen niet overeen' : ''
        } 
    },
    methods: {
        async onSignup(){
            try{
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(()=>
                this.$router.replace('/overzicht-opdrachten'))
            }catch(err){
                console.log(err)   
            }
            
            
        }
    }
}
</script>