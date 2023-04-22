<script lang="ts">
  import HomeTitle from "@/components/home/HomeTitle.vue";
  import HomeBook from "@/components/home/HomeBook.vue";

  export default {
    components: { HomeTitle, HomeBook },
  }
</script>

<template>
    <section class="home-section section" id="home-section" ref="home">
      <HomeTitle/>
      <HomeBook @open="$emit('open', 'chevron')"/>
    </section> 
</template>

<style lang="scss" scoped>
  .home-section {
    display: grid;
    grid-template-rows: min-content auto;
    margin-bottom: 0;
  }

  @media screen and (min-width: 700px) {
    .home-section {
      margin: 0 8em;
      font-size: 1rem;

      display: grid;
      align-items: center;
      grid-template-rows: auto;
      grid-template-columns: .6fr .4fr;
    }
  }

  @media screen and (min-width: 1400px) {
    .home-section { font-size: 1.15rem; }
  }
  
  @media screen and (min-width: 1700px) {
    .home-section { font-size: 1.35rem; }
  }

</style>
