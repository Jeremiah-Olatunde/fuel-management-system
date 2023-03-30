<script lang="ts">
  import HeroTitle from "@/components/hero/HeroTitle.vue";
  import HeroBook from "@/components/hero/HeroBook.vue";

  export default {
    components: { HeroTitle, HeroBook },
  }
</script>

<template>
    <section class="hero-section section" id="hero-section" ref="hero">
      <HeroTitle/>
      <HeroBook @open="$emit('open', 'chevron')"/>
    </section>  
</template>

<style lang="scss" scoped>
  .hero-section {
    display: grid;
    grid-template-columns: 60% 40%;
  }
</style>
