<template>
  <v-card
    class="mx-auto overflow-hidden"
    >
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><router-link to="/" tag="span">Waarheid</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
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
      :key="item.title">
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

export default {
  data: () => ({
    drawer: false,
    menuItems: [
    {icon: 'mdi-home', title: 'Mijn account', link: '/home' },
    {icon: 'mdi-account-plus', title: 'Sign Up', link: '/signup' },
    {icon: 'mdi-login', title: 'Sign In', link: '/login' }
    ]
  }),
};
</script>
