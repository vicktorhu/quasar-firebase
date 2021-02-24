<template>
  <q-page class="column justify-start">
    <div class="row justify-center q-my-xl">
      <img alt="Quasar logo" src="~assets/logo-firebase.png" >
    </div>
    <div class="q-px-lg text-h2 text-center">
      Quasar Firebase Demo
    </div>
    <div class="q-px-lg q-mt-md text-h7 text-center">
      By Vicktor Hutama (<a href="https://github.com/vicktorhu/quasar-firebase" class="text-primary">vicktorhu</a>) | Based on <a href="https://dev.to/quasar/to-the-stars-with-quasar-firebase-user-profile-319l" class="text-primary">this tutorial</a>
    </div>
    <div class="q-px-lg q-mt-sm text-h6 text-center">
      Click here to
      <router-link to="auth/register" class="text-primary">register</router-link> a new account or to
      <router-link to="auth/login" class="text-primary">login</router-link>.
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>