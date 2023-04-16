<script lang="ts"></script>

<template>
  <div class="services-gallery dotted-bg">

    <div class="track left-track">
      <header class="gallery-header section-header">
        <div class="main-header">our <br> services</div>
          <div class="dash"></div>
      </header>

      <div class="service-card card">
        <img class="image" src="@/assets/images/offshore.jpg" alt="">
        <header class="header">
          <h3 class="main-header">home <br> rentals </h3>
        </header>
      </div>

      <div class="service-card card">
        <img class="image" src="@/assets/images/excavator.jpg" alt="">
        <header class="header">
          <h3 class="main-header">oilfield <br> services</h3>
        </header>
      </div>    

      <div class="service-card card">
        <img class="image" src="@/assets/images/beams.jpg" alt="">
        <header class="header">
          <h3 class="main-header">and  <br> more</h3>
        </header>
      </div>    
    </div>

    <div class="track right-track">
      <div class="service-card card">
        <img class="image" src="@/assets/images/flat.jpg" alt="">
        <header class="header">
          <h3 class="main-header">engineering </h3>
        </header>
      </div>

      <div class="service-card card">
        <img class="image" src="@/assets/images/conceptual.jpg" alt="">
        <header class="header">
          <h3 class="main-header">procurement </h3>
        </header>
      </div>

      <div class="service-card card">
        <img class="image" src="@/assets/images/cranes.jpg" alt="">
        <header class="header">
          <h3 class="main-header">capital <br> construction</h3>
        </header>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .services-gallery {
    padding: 4em;
    font-size: 1rem; // 1280 x 720 = 1rem;

    display: grid;
    column-gap: 4em;
    grid-template-columns: 1fr 1fr;

    .dotted {
      background: rgb(249, 249, 249);
      box-shadow: 0 0 2rem 2rem rgba(249, 249, 249);
    }
    
    .gallery-header { 
      padding-bottom: 4em;
      .main-header { font-size: 4em; }

      .dash { 
        margin-top: 1em;
        width: 6em; height: .5em; 
        background: var(--accent-dark);
      }
    }

    .service-card {
      margin-bottom: 7rem;
      aspect-ratio: 1 / 1.5;
      .header { padding: 2em }
      .main-header { font-size: 2.5em; }
      &:last-child { margin-bottom: 0; }
    }
  }
</style>
