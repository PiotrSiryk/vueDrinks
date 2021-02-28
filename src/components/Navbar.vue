<template>
  <nav>
    <v-app-bar dark
      ><v-toolbar-title class="hidden-xs-only">
        Drinks
      </v-toolbar-title>
      <v-btn
        v-on:click="drawerOpen = openDrawer"
        class="hidden-sm-and-up"
        icon
        color="white"
        large
        ><v-icon>mdi-menu</v-icon></v-btn
      >
      <v-spacer></v-spacer>
      <v-tabs class="hidden-xs-only">
        <v-tab
          v-bind:to="tab.path"
          v-for="(tab, index) in tabsList"
          v-bind:key="index"
          ><v-icon left> {{ tab.icon }} </v-icon> {{ tab.name }}</v-tab
        >
      </v-tabs>
      <LoginPopup v-bind:isLogged="isLogged" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawerOpen" absolute temporary right>
      <v-tabs vertical>
        <v-tab
          active-class="open-tab-color"
          v-bind:to="tab.path"
          v-for="(tab, index) in tabsList"
          v-bind:key="index"
          ><v-icon left> {{ tab.icon }} </v-icon> {{ tab.name }}</v-tab
        >
      </v-tabs>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import LoginPopup from "./navigation/LoginPopup";
import tabs from "../assets/tabs";
export default {
  components: {
    LoginPopup,
  },
  data() {
    return {
      isLogged: false,
      tabsList: tabs,
      drawerOpen: false,
    };
  },
  methods: {
    openDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  },
};
</script>

<style scoped>
.open-tab-color {
  background-color: #2b81d6;
  color: white !important;
}
</style>
