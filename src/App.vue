<template>
  <v-card
    class="mx-auto overflow-hidden"
    >
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><router-link to="/" tag=span style="cursor: pointer;">Waarheid</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link to="/profile" tag=span style="cursor: pointer;"><v-icon>mdi-account</v-icon></router-link>
      </v-btn>
      <div>
        Logged in
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>

        <v-btn icon @click="signOut">
          SignOut
        </v-btn>

      </div>



    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list>
        <v-list-item-group>

      <v-list-item 
      v-for="item in menuItems" 
      :key="item.title"
      router
      :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
          <v-list-item-content>{{item.title}}</v-list-item-content>
      </v-list-item>
        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>
    <v-container style="height: 1000px;"><router-view></router-view></v-container>
  </v-card>
  
</template>

<style>
  @import './assets/styles/style.css';
</style>

<script>
import * as firebase from 'firebase'
export default {
  data: () => ({
    drawer: false,
    menuItems: [
    {icon: 'mdi-home', title: 'Mijn account', link: '/home' },
    {icon: 'mdi-account-plus', title: 'Sign Up', link: '/signup' },
    {icon: 'mdi-login', title: 'Sign In', link: '/signin' }
    ],
    
  }),
    created() {
      firebase.auth().onAuthStateChanged(user=>{
          this.loggedIn = !!user;
      })
    },
    methods: {
      async signOut(){
        try{
          const data = await firebase.auth().signOut();
          this.$router.replace({name: "signin"}) //Redirect to signin page
          console.log(data);
        }catch(err){
          console.log(err);
        }
        
        
      }

  }

};

</script>