<script lang="ts">

  import RightArrowIcon from "@/components/icons/RightArrowIcon.vue";
  import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";
  import GearIcon from "@/components/icons/GearIcon.vue";
  import BellIcon from "@/components/icons/BellIcon.vue";

  export default {
    components: { RightArrowIcon, LeftArrowIcon, GearIcon, BellIcon }
  }
</script>
<template>
  <div class="services-mobile dotted-bg">
    <header class="service-card services-header">
      <GearIcon class="services-icon number"></GearIcon>
      <h2 class="content">Services</h2>
      <BellIcon class="icon"></BellIcon>
    </header>

    <div class="service-card">
      <div class="number">01</div>
      <div class="content">procument</div>
      <RightArrowIcon class="icon"></RightArrowIcon>
    </div>

    <div class="service-card">
      <div class="number">02</div>
      <div class="content">consultancy</div>
      <RightArrowIcon class="icon"></RightArrowIcon>
    </div>

    <div class="service-card">
      <div class="number">03</div>
      <div class="content">home Rentals</div>
      <RightArrowIcon class="icon"></RightArrowIcon>
    </div>

    <div class="service-card">
      <div class="number">04</div>
      <div class="content">oilfield services</div>
      <RightArrowIcon class="icon"></RightArrowIcon>
    </div>

    <div class="service-card">
      <div class="number">05</div>
      <div class="content">capital construction</div>
      <RightArrowIcon class="icon"></RightArrowIcon>
    </div>
  </div>

</template>

<style lang="scss" scoped>

  .services-mobile {
    padding: 8rem 2em;
    display: grid;

    .service-card {
      padding: 2em;
      aspect-ratio: 4.5;
      margin-bottom: 3em;
      &:last-child { margin-bottom: 0; }

      overflow: hidden;

      display: grid;
      align-items: center;
      grid-template-columns: auto min-content;


      background: white;
      border: 2px solid black;
      box-shadow: 
        2px 2px 0  darkgoldenrod, 
        5px 5px 0 black,
        3px 3px 10px black
      ;

      .number {
        font-size: 7em;
        font-weight: 900;

        left: -6%;
        position: absolute;

        color: rgba(160, 160, 160, 0.25);
      }

      .icon { height: 2em; aspect-ratio: 1; }

      .content {
        font-size: 2em;
        font-weight: 800;
        font-variant: small-caps;

        letter-spacing: -.075rem;
        text-transform: capitalize;
      }
    }

    .services-header {
      color: white;
      background: black;

      .icon { fill: white; }
      .services-icon {
        height: 1em;
        aspect-ratio: 1;
        fill: rgba(160, 160, 160, 0.25);
      }
    }
  }

  @media screen and (min-width: 700px) {
    .services-mobile { display: none; }
  }

</style>
