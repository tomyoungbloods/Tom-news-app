<template>
<v-container>
    <v-layout>
        <v-flex xs12 sm6 offstem-sm3>
            Login
            <v-card>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="onSignon">
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                        name="email"
                                        label="Mail"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                        name="Password"
                                        label="Password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required
                                        ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <!-- <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        id="confirmPassword"
                                        v-model="confirmPassword"
                                        type="password"
                                        required></v-text-field>
                                </v-flex>
                            </v-layout> -->
                            <v-layout row>
                                <v-flex xs12>
                                    <v-btn type="submit">
                                        Sign up
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
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

    methods: {
                async onSignon(){
                    try{
                        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>
                            this.$router.replace('Profile'))
                    }catch(err){
                        console.log(err)
                    }
                }
                }
            }
</script>