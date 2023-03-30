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
          <h3 class="main-header">oil <br> services</h3>
        </header>
      </div>

      <div class="service-card card">
        <img class="image" src="@/assets/images/excavator.jpg" alt="">
        <header class="header">
          <h3 class="main-header">civil <br> building</h3>
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
          <h3 class="main-header">real <br> estate</h3>
        </header>
      </div>

      <div class="service-card card">
        <img class="image" src="@/assets/images/conceptual.jpg" alt="">
        <header class="header">
          <h3 class="main-header">home <br> rentals</h3>
        </header>
      </div>

      <div class="service-card card">
        <img class="image" src="@/assets/images/cranes.jpg" alt="">
        <header class="header">
          <h3 class="main-header">water <br> works</h3>
        </header>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .services-gallery {
    padding: 4em;
    font-size: 1.15rem; // 1280 x 720 = 1rem;

    display: grid;
    grid-column-gap: 7em;
    grid-template-columns: 1fr 1fr;
    
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
      aspect-ratio: 1 / 1.5;
      margin-bottom: 7em;

      .header { padding: 2em }
      .main-header { font-size: 3.5em; }
      &:last-child { margin-bottom: 0; }
    }
  }
</style>
