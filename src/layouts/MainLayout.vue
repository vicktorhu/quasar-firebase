<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Quasar Firebase Demo </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div>
          <q-btn :class="darkToggleProps.class" :icon="darkToggleProps.icon" @click="darkToggle" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :content-class="darkToggleProps.sidebar">
      <q-list>
        <q-item-label header class="text-primary text-h6">
          Quasar Firebase
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Home",
    icon: "home",
    link: "/",
  },
  {
    title: "Login",
    icon: "login",
    link: "/auth/login/",
  },
  {
    title: "Register",
    icon: "person_add",
    link: "/auth/register/",
  },
  {
    title: "Forgot Password",
    icon: "lock_open",
    link: "/auth/forgotPassword/",
  },
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
  computed: {
    darkToggleProps(){
      return {
        icon: (this.$q.dark.isActive) ? "dark_mode" : "brightness_high", 
        class: (this.$q.dark.isActive) ? "bg-grey-10 text-grey-1" : "bg-grey-1 text-grey-10" ,
        sidebar: (this.$q.dark.isActive) ? "bg-grey-10" : "bg-grey-1",
      }
    },
  },
  methods: {
    darkToggle() {
      this.$q.dark.toggle();
    },
  },
};
</script>
