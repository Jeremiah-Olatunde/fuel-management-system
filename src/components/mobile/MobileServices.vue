<script lang="ts">

  import RightArrow from "@/components/icons/RightArrowIcon.vue";
  import LeftArrow from "@/components/icons/LeftArrowIcon.vue";

  export default {
    components: { RightArrow, LeftArrow }
  }
</script>

<template>
  <section class="section mobile-services dotted-bg">
    <header class="gallery-header section-header">
      <div class="main-header">our <br> services</div>
      <div class="dash"></div>
    </header>

    <div class="service-card">
      <div class="number">01</div>
      <div class="content">real estate</div>
      <RightArrow class="icon"></RightArrow>
    </div>
    <div class="service-card">
      <div class="number">02</div>
      <div class="content">consultancy</div>
      <RightArrow class="icon"></RightArrow>
    </div>
    <div class="service-card">
      <div class="number">03</div>
      <div class="content">procurement</div>
      <RightArrow class="icon"></RightArrow>
    </div>
    <div class="service-card">
      <div class="number">04</div>
      <div class="content">capital construction</div>
      <RightArrow class="icon"></RightArrow>

    </div>
    <div class="service-card">
      <div class="number">05</div>
      <div class="content">oil field services</div>
        <RightArrow class="icon"></RightArrow>
    </div>
    <div class="service-card">
      <div class="number">06</div>
      <div class="content">ancillary services</div>
        <RightArrow class="icon"></RightArrow>
    </div>
  </section>
</template>

<style lang="scss" scoped>
    .mobile-services {
      padding: 8rem 2rem;
      margin-bottom: 0;
    }

    .gallery-header { 
      margin-bottom: 4em;

      .main-header { 
        font-size: 4em;
      }
      .sub-header { font-size: 2em; }
      .dash { 
        margin-top: 1em;
        width: 6em; height: .5em; 
        background: var(--accent-dark);
      }
    }

    .service-card {
      padding: 2rem;
      aspect-ratio: 4.5;
      margin-bottom: 3rem;
      &:last-child { margin-bottom: 0; }
      overflow: hidden;

      display: grid;
      align-items: center;

      background: white;
      border: 2px solid black;
      box-shadow: 
        2px 2px 0  darkgoldenrod, 
        5px 5px 0 black,
        3px 3px 10px black
      ;

      display: grid;
      grid-template-columns: auto min-content;

      .number {
        font-size: 7rem;
        font-weight: 900;
        color: rgba(160, 160, 160, 0.25);
        position: absolute;
        left: -6%;
      }

      .icon {
        height: 2rem;
        aspect-ratio: 1;
      }

      .content {
        font-size: 2rem;
        font-weight: 800;
        font-variant: small-caps;
        text-transform: capitalize;

        letter-spacing: -.1rem;
      }
    }
</style>

