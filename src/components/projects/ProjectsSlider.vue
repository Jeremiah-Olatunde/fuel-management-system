<script lang="ts">
  import Swiper from "swiper";

  export default {
    mounted: function(){
      const swiper = new Swiper('#projects-slider', {
        grabCursor: true,
        spaceBetween: 0,
        slidesPerView: 1,
        breakpoints: { 
          700: { slidesPerView: 3, spaceBetween: 40 } ,
          // 1500: { slidesPerView: 4, spaceBetween: 40 } 
        },
        on: {
          init: function(swiper){
            const idx = swiper.activeIndex;
            for(let i = idx; i < idx + 3; i++ )
              swiper.slides[i].style.opacity = "1";
          },

          slideChange: function(swiper){
            const idx = swiper.activeIndex;

            swiper.slides[swiper.activeIndex].classList.toggle("active");
            swiper.slides[swiper.previousIndex].classList.toggle("active");

            for(let i = 0; i < swiper.slides.length; i++ ){
              if(idx <= i && i < idx + 3) swiper.slides[i].style.opacity = "1";
              else swiper.slides[i].style.opacity = "0";
            }
          },
        }
      });


    },

    emits: ['open']
  }
</script>

<template>
  <div class="projects-slider" id="projects-slider">
    <div class="swiper-wrapper projects-wrapper">
      <figure class="swiper-slide project-slide card active" @click="$emit('open', 'chevron')">
        <img class="image" src="@/assets/images/chevron/facade.jpg" alt="">
        <div class="number"></div>
        <figcaption class="project-header header">
          <h3 class="main-header">home <br> rentals</h3>
        </figcaption>
      </figure>    

      <figure class="swiper-slide project-slide card" @click="$emit('open', 'oilfield')">
        <img class="image" src="@/assets/images/oilfield.jpg" alt="">
        <div class="number"></div>
        <figcaption class="project-header header">
          <h3 class="main-header">oilfield <br> services</h3>
        </figcaption>
      </figure>  

      <figure class="swiper-slide project-slide card" @click="$emit('open', 'construction')">
        <img class="image" src="@/assets/images/construction.jpg" alt="">
        <div class="number"></div>
        <figcaption class="project-header header">
          <h3 class="main-header">capital <br> construction</h3>
        </figcaption>
      </figure> 

      <figure class="swiper-slide project-slide card" @click="$emit('open', 'procurement')">
        <img class="image" src="@/assets/images/worker.jpg" alt="">
        <div class="number"></div>
        <figcaption class="project-header header">
          <h3 class="main-header">procurement <br></h3>
        </figcaption>
      </figure>   

      <figure class="swiper-slide project-slide card">
        <img class="image" src="@/assets/images/consultancy.jpg" alt="">
        <div class="number"></div>
        <figcaption class="project-header header">
          <h3 class="main-header">consultancy <br> </h3>
        </figcaption>
      </figure>   


      <!-- <figure class="swiper-slide project-slide card">
        <img class="image" src="@/assets/images/sitting.jpg" alt="">
        <div class="number"></div>
        <figcaption class="project-header header">
          <h3 class="main-header">lorem <br> ipsum</h3>
        </figcaption>
      </figure>                       -->
    </div>
  </div>

</template>

<style lang="scss" scoped>
  @import url("swiper/css");

  .projects-slider {
    // padding: 6em;
    margin: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;

    border: .5em solid black;
    border-left: 0; border-right: 0;
    box-shadow: 0 0 10px black;

    .projects-wrapper {
      height: calc(100%);
      counter-reset: number;

      .project-slide {
        opacity: 0;
        transition: opacity .25s ease;

        .number::before { 
          counter-increment: number;
          content: "0" counter(number);
          font-size: 4em;
          padding: .6em; 
       }

        .project-header {
          padding: 3em;
          .main-header { font-size: 3em; line-height: 1.25 }
        }
      }

      .active .number::before { color: var(--accent-dark); }
    }
  }

  @media screen and (min-width: 700px) {
    .projects-slider {
      padding: 6em;
      border: 0;
      box-shadow: none;
    }
  }
</style>