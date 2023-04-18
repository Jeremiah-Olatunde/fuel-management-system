<script lang="ts">
  export default {}
</script>

<template>
  <section class="gallery-section">
    <div class="gallery dotted-bg" style="grid-area: gallery;">
      <div class="card" v-for="n in 15">
        <img 
          :src="`/src/assets/images/chevron/ (${n}).jpg`" alt=""
          class="image"
        >
      </div>
    </div>

    <div class="gallery-title" style="grid-area: title;">
      <header class="gallery-header section-header">
        <h2 class="main-header">
          take  <br class="br"> a  look
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
    display: grid;
    font-size: 1rem;
    // grid-template-columns: .6fr .4fr;
    grid-template-rows: min-content auto;
    grid-template-areas: "title" "gallery";
  }

  .gallery {
    padding: 3em;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    .card {
      width: 100%;
      aspect-ratio: 1 / 1.5;
      margin: 1.5em 0 ;

      .image {
        opacity: 1;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);      
      }
    }

    .card:hover .image { opacity: 1; width: 110%; height: 110%; }

  }

  .gallery-title {
    display: grid;
    align-items: center;

    padding: 3em;

  
    .gallery-header {
      .main-header { font-size: 6em; }
      .sub-header { font-size: 2em; }
      .more-button {
        font-size: 2em;
        font-weight: 800;
        font-variant: small-caps;   
        text-align: left;

        padding-top: .5em;
        letter-spacing: .1em;

        .dash { letter-spacing: 0; margin-right: .5em; }
      }
    }
  }

  @media screen and (min-width: 700px) {

    .gallery-section {
      display: grid;
      font-size: 1rem;
      grid-template-columns: .6fr .4fr;
      grid-template-areas: "gallery title";
    }

    .gallery-title {
      padding-left: 2.5em;
      height: 100vh;

      top: 0;
      position: sticky;
    }

    .gallery {

      .card {
        margin: 1em;
        width: 30%;
        min-width: 100px;
      }
    }
  }

</style>