<script lang="ts">

  import RightArrowIcon from "@/components/icons/RightArrowIcon.vue";
  import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";

  export default {
    components: { RightArrowIcon, LeftArrowIcon }
  }
</script>
<template>
  <div class="services-gallery dotted-bg">
    <div class="track left-track">
      <header class="gallery-header section-header">
        <h2 class="main-header">services</h2>
      </header>

      <figure class="service-card card">
        <img class="image" src="@/assets/images/chevron/facade.jpg" alt="">
        <figcaption class="header">
          <h4 class="main-header">home <br> rentals </h4>
        </figcaption>
      </figure>

      <figure class="service-card card">
        <img class="image" src="@/assets/images/oilfield.jpg" alt="">
        <figcaption class="header">
          <h4 class="main-header">oilfield <br> services</h4>
        </figcaption>
      </figure>    

      <figure class="service-card card">
        <img class="image" src="@/assets/images/beams.jpg" alt="">
        <figcaption class="header">
          <h4 class="main-header">and  <br> more</h4>
        </figcaption>
      </figure>    
    </div>

    <div class="track right-track">
      <figure class="service-card card">
        <img class="image" src="@/assets/images/flat.jpg" alt="">
        <figcaption class="header">
          <h4 class="main-header">civil <br>  engineering </h4>
        </figcaption>
      </figure>

      <figure class="service-card card">
        <img class="image" src="@/assets/images/procurement/(1).jpeg" alt="">
        <figcaption class="header">
          <h4 class="main-header">material <br> procurement </h4>
        </figcaption>
      </figure>

      <figure class="service-card card">
        <img class="image" src="@/assets/images/construction.jpg" alt="">
        <figcaption class="header">
          <h4 class="main-header">capital <br> construction</h4>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .services-gallery { display: none; }

  @media screen and (min-width: 700px) {
    .services-gallery {
      padding: 4em;

      display: grid;
      column-gap: 4em;
      grid-template-columns: 1fr 1fr;

      .dotted {
        background: rgb(249, 249, 249);
        box-shadow: 0 0 2rem 2rem rgba(249, 249, 249);
      }
      
      .gallery-header {
        font-size: 1.75em;

        padding: .5em 0;
        margin-bottom: 2.3em;
        
        color: white;
        background: black;
        box-shadow: rgba(0, 0, 0, .7) 0 1rem 3rem;


        .main-header { 
          padding: .25em 0;
          text-align: center;
          margin-right: -1.25rem;
          letter-spacing: 1.25rem;
        }
      }

      .service-card {
        margin-bottom: 4em;
        aspect-ratio: 1 / 1.5;

        .header { padding: 2em }
        .main-header { 
          font-size: 2.25em; 
          line-height: 1.25;
          letter-spacing: .125rem; 
        }

        &:last-child { margin-bottom: 0; }
      }
    }
  }
</style>
