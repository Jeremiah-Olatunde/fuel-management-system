<script lang="ts">
  import Footerlevels from "@/components/footer/Footerlevels.vue";

  export default {
    components: { Footerlevels },
  }
</script>

<template>
  <section class="footer-section" id="contact-section">
    <Footerlevels/>
  </section> 
</template>

<style lang="scss" scoped>
  .footer-section {
    position: relative;
    

    &::before {
      content: '';
      background-color: darkgoldenrod;
      width: 0.3em;
      height: 6em;
      position: absolute;
      left: calc(50% - 0.3em);
      transform: translateY(-50%);
      z-index: 1000;
    }
  }

  @media screen and (min-width: 700px) {
    .footer-section {
      &::before {
        left: 52%;
      }
    }
  }
</style>