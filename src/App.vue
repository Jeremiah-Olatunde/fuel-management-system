<script lang="ts">

  import Chart from "chart.js/auto";
  import SignInVue from "./components/signin/SignIn.vue";
  import DashboardVue from "./components/dashboard/Dashboard.vue";

  export default {
    data: function(){ return { page: "signin" }},
    components: { SignInVue, DashboardVue },
  }
</script>

<template>
  <main class="app-container">
    <SignInVue @open="(pageName) => page = pageName" v-if="page == 'signin'"></SignInVue>
    <DashboardVue v-if="page == 'dashboard'"></DashboardVue>
  </main>
</template>

<style lang="scss">

</style>
