<script lang="ts">
  import ServicesTitle from "@/components/services/ServicesTitle.vue";
  import ServicesGallery from "@/components/services/ServicesGallery.vue";

  export default {
    components: { ServicesTitle, ServicesGallery }
  }
</script>


<template>
  <section class="services-section section" id="services-section">
    <ServicesGallery></ServicesGallery>
    <ServicesTitle></ServicesTitle>
  </section>
</template>

<style lang="scss" scoped>
  .services-section {
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>