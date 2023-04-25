<script lang="ts">
  import ServicesTitle from "@/components/services/ServicesTitle.vue";
  import ServicesGallery from "@/components/services/ServicesGallery.vue";
  import ServicesMobile from "@/components/services/ServicesMobile.vue";

  export default {
    components: { ServicesTitle, ServicesGallery, ServicesMobile }
  }
</script>


<template>
  <section class="services-section section" id="services-section">
    <ServicesGallery></ServicesGallery>
    <ServicesTitle></ServicesTitle>

    <ServicesMobile></ServicesMobile>
  </section>
</template>

<style lang="scss" scoped>
  .services-section { display: grid; }

  @media screen and (min-width: 700px) {
    .services-section { grid-template-columns: .5fr .5fr; }
  }

  @media screen and (min-width: 1400px) {
    .services-section { font-size: 1.15rem; }
  }
  
  @media screen and (min-width: 1700px) {
    .services-section { font-size: 1.35rem; }
  }
</style>