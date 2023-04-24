<script lang="ts">
  import AboutTitle from "@/components/about/AboutTitle.vue";
  import AboutList from "@/components/about/AboutList.vue";

  export default {
    components: { AboutTitle, AboutList},
  }
</script>

<template>
  <section class="about-section section" id="about-section">
    <AboutTitle/>
    <AboutList/>
  </section>
</template>

<style lang="scss" scoped>
  .about-section {
    background-color: rgb(254, 253, 253);
    display: grid;
    place-items: center;
    margin-bottom: 0;
    padding: 8em 0 5em;
  }

  @media screen and (min-width: 800px) {
    .about-section {
      grid-template-columns: auto auto;
    }

    @media screen and (min-width: 1400px) {
    .about-section { font-size: 1.15rem; }
    }
  
  @media screen and (min-width: 1700px) {
    .about-section { font-size: 1.35rem; }
    }
  }
</style>