<script lang="ts">
  export default {}
</script>

<template>
  <section class="gallery-section">
    <div class="gallery dotted-bg">
      <div class="card">
        <img src="@/assets/images/flatfront.jpg" alt="" class="image">
      </div>

      <div class="card">
        <img src="@/assets/images/flat.jpg" alt="" class="image">
      </div>

      <div class="card">
        <img src="@/assets/images/sitting.jpg" alt="" class="image">
      </div>

      <div class="card">
        <img src="@/assets/images/living.jpg" alt="" class="image">
      </div>

      <div class="card">
        <img src="@/assets/images/chair.jpg" alt="" class="image">
      </div>

      <div class="card">
        <img src="@/assets/images/cooking.jpg" alt="" class="image">
      </div>  

      <div class="card">
        <img src="@/assets/images/sleep.jpg" alt="" class="image">
      </div>      
    </div>

    <div class="gallery-title">
      <header class="gallery-header section-header">
        <h2 class="main-header">
          take  <br> a  look
        </h2>
        <h3 class="sub-header">have a night you will never forget</h3>
        <button class="more-button" @click="$emit('close')">
          <span class="dash">&mdash;&mdash;</span>
          close gallery
        </button>
      </header>

    </div>
  </section>
</template>

<style lang="scss" scoped>

  .gallery-section {
    height: 100vh;
    display: grid;
    grid-template-columns: 60% 40%;
    font-size: 1.15rem; // 1280 x 720 = 1rem;
  }

  .gallery {
    height: 100vh;
    padding: 5em;

    display: grid;
    grid-gap: 3em;
    grid-template-rows: repeat(6, calc((100% - 15em) / 6));
    grid-template-columns: repeat(8, calc((100% - 21em) / 8));

    .image {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);      
    }

    .card:hover .image { opacity: 1; width: 110%; height: 110%; }
    .card:nth-child(1) { grid-area: 1 / 1 / span 4 / span 3; }
    .card:nth-child(2) { grid-area: 1 / 4 / span 2 / span 3; }
    .card:nth-child(3) { grid-area: 5 / 1 / span 2 / span 2; }
    .card:nth-child(4) { grid-area: 5 / 3 / span 2 / span 3; }
    .card:nth-child(5) { grid-area: 3 / 4 / span 2 / span 2; }
    .card:nth-child(6) { grid-area: 3 / 6 / span 4 / span 3; }
    .card:nth-child(7) { grid-area: 1 / 7 / span 2 / span 2; }
    .card:nth-child(8) { grid-area: 1 / 9 / span 2 / span 3; }
    .card:nth-child(9) { grid-area: 3 / 8 / span 2 / span 4; }
  }

  .gallery-title {
    display: grid;
    align-items: center;
    padding-left: 2.5em;
  
    .gallery-header {

      .main-header { font-size: 9em; }
      .sub-header { font-size: 2.25em; }
      .more-button {
        font-size: 2em;
        font-weight: 800;
        font-variant: small-caps;   

        padding-top: .5em;
        letter-spacing: .1em;

        .dash { letter-spacing: 0; margin-right: .5em; }
      }
    }
  }

</style>