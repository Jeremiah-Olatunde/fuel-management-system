<script lang="ts">

  import RightArrowIcon from "@/components/icons/RightArrowIcon.vue";
  import LeftArrowIcon from "@/components/icons/LeftArrowIcon.vue";

  export default {
    components: { RightArrowIcon, LeftArrowIcon }
  }
</script>
<template>
  <div class="services-gallery services-gallery-lg dotted-bg">

    <div class="track left-track">
      <header class="gallery-header section-header">
        <h2 class="main-header">services</h2>
          <div class="dash"></div>
      </header>

      <figure class="service-card card">
        <img class="image" src="@/assets/images/offshore.jpg" alt="">
        <figcaption class="header">
          <h4 class="main-header">home <br> rentals </h4>
        </figcaption>
      </figure>

      <figure class="service-card card">
        <img class="image" src="@/assets/images/excavator.jpg" alt="">
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
        <img class="image" src="@/assets/images/conceptual.jpg" alt="">
        <figcaption class="header">
          <h4 class="main-header">material <br> procurement </h4>
        </figcaption>
      </figure>

      <figure class="service-card card">
        <img class="image" src="@/assets/images/cranes.jpg" alt="">
        <figcaption class="header">
          <h4 class="main-header">capital <br> construction</h4>
        </figcaption>
      </figure>
    </div>
  </div>

  <div class="services-gallery services-gallery-sm dotted-bg">
    <header class="gallery-header section-header">
      <div class="main-header">services</div>
      <div class="dash"></div>
    </header>

    <div class="service-card">
      <div class="number">01</div>
      <div class="content">real estate</div>
      <RightArrowIcon class="icon"></RightArrowIcon>
    </div>
    <div class="service-card">
      <div class="number">02</div>
      <div class="content">consultancy</div>
      <RightArrowIcon class="icon"></RightArrowIcon>
    </div>
    <div class="service-card">
      <div class="number">03</div>
      <div class="content">procurement</div>
      <RightArrowIcon class="icon"></RightArrowIcon>
    </div>
    <div class="service-card">
      <div class="number">04</div>
      <div class="content">capital construction</div>
      <RightArrowIcon class="icon"></RightArrowIcon>

    </div>
    <div class="service-card">
      <div class="number">05</div>
      <div class="content">oil field services</div>
        <RightArrowIcon class="icon"></RightArrowIcon>
    </div>
    <div class="service-card">
      <div class="number">06</div>
      <div class="content">ancillary services</div>
        <RightArrowIcon class="icon"></RightArrowIcon>
    </div>
  </div>

</template>

<style lang="scss" scoped>

  .services-gallery .gallery-header {
    padding: 1rem;
    
    color: white;
    background: black;

    .main-header { 
      padding: .25em 0;
      text-align: center;
      margin-right: -1.25rem;
      letter-spacing: 1.25rem;
    }
  }

  .services-gallery-lg { display: none; }
  .services-gallery-sm {
    padding: 10rem 2rem;
    margin-bottom: 0;

    .gallery-header { 
      font-size: 2.5em; 
      margin-bottom: .75em; 

    box-shadow: 
        2px 2px 0  darkgoldenrod, 
        5px 5px 0 black,
        3px 3px 10px black
      ;
    
  }
    .service-card {
      padding: 2rem;
      aspect-ratio: 4.5;
      margin-bottom: 3rem;
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
  }


  @media screen and (min-width: 700px) {
    .services-gallery-sm { display: none; }
    .services-gallery-lg {
      padding: 4em;
      display: grid;
      column-gap: 4em;
      grid-template-columns: 1fr 1fr;

      .dotted {
        background: rgb(249, 249, 249);
        box-shadow: 0 0 2rem 2rem rgba(249, 249, 249);
      }
      
      .gallery-header {
        font-size: 2em;
        margin-bottom: 3em;
      }

      .service-card {
        margin-bottom: 7rem;
        aspect-ratio: 1 / 1.5;
        .header { padding: 2em }
        .main-header { 
          font-size: 2.25em; 
          letter-spacing: .125rem; 
          line-height: 1.25;
        }
        &:last-child { margin-bottom: 0; }
      }
    }
  }


</style>
