<script lang="ts">
  import Swiper from "swiper";

  export default {
    mounted: function(){

      const bullets = Array.from(document.querySelectorAll(".pagination .bullet"));
      const carousel = document.querySelector(".swiper-wrapper") as HTMLElement;
      const carousel_item = document.querySelector(".swiper-wrapper .active");

      if (!carousel_item) throw new Error("CAROUSEL ITEM NOT FOUND")

      function index_calc() {
        return bullets.findIndex(value => value.classList.contains("bullet-active"));
      }

      bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
          // const previousIndex = bullets.findIndex(value => value.classList.contains("bullet-active"));
          const previousIndex = index_calc();
          const {width: w, slides} = swiper;
          
          bullets[previousIndex].classList.toggle("bullet-active");
          bullets[index].classList.toggle("bullet-active");
          
          const slide_width = carousel_item.getBoundingClientRect().width
          carousel.style.transform = `translate3d(${(-index) * slide_width}px, 0, 0)`;
          
          for(let i = 0; i < slides.length; i++) {
              if(index <= i && i < index + (w < 700 ? 1 : 3)) slides[i].style.opacity = "1"; 
              else slides[i].style.opacity = "0";

              slides[previousIndex].classList.toggle("active");
              slides[index].classList.toggle("active")
          }
        })
      })

      const swiper = new Swiper('#projects-slider', {
        grabCursor: true,
        spaceBetween: 0,
        slidesPerView: 1,
        observer: true,
        breakpoints: { 
          700: { 
            spaceBetween: 40,
            slidesPerView: 3,
          } ,
        },
        on: {
          resize: function(swiper){
            const { activeIndex: idx, width: w, slides } = swiper;

            for(let i = 0; i < slides.length; i++) {
              if(idx <= i && i < idx + (w < 700 ? 1 : 3)) slides[i].style.opacity = "1"; 
              else slides[i].style.opacity = "0";
            }
          },

          slideChange: function(swiper){
            const { activeIndex: idx, width: w, slides } = swiper;

            bullets[index_calc()].classList.toggle("bullet-active");
            bullets[idx].classList.toggle("bullet-active");

            for(let i = 0; i < slides.length; i++) {
              if(idx <= i && i < idx + (w < 700 ? 1 : 3)) slides[i].style.opacity = "1"; 
              else slides[i].style.opacity = "0";
            }
          },
        }
      });
    },

    emits: ['open']
  }
</script>

<template>
  <div class="projects-slider" id="projects-slider" style="grid-area: slider;">
    <div class="swiper-wrapper projects-wrapper">
      <figure class="swiper-slide project-slide card active" @click="$emit('open', 'chevron')">
        <img class="image" src="@/assets/images/cozy.jpg" alt="">
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
    </div>
  </div>

  <div class="pagination" style="grid-area: pagination;">
    <div class="bullet-active bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
    <div class="bullet"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import url("swiper/css/bundle");

  .projects-slider {
    margin: auto;
    height: 100%;
    width: calc(100vw - 6em);
    box-shadow: rgba(0, 0, 0, .7) 0 1rem 3rem;

    .projects-wrapper {
      height: 100%;
      counter-reset: number;

      .project-slide {
        opacity: 0;
        transition: opacity .25s ease;

        .number::before { 
          padding: .6em; 
          font-size: 4em;
          counter-increment: number;
          content: "0" counter(number);
       }

        .project-header {
          padding: 3em;
          .main-header { font-size: 3em; line-height: 1.25 }
        }
      }
    }
  }

  .pagination {

    display: flex;
    align-items: center;
    justify-content: center;

    .bullet {
      height: 1.5em;
      aspect-ratio: 1;
      margin: 0 .25em;
      border-radius: 100%;
      border: 1px solid black;
      transition: aspect-ratio .2s ease-out;
    }

    .bullet-active {
      aspect-ratio: 1.75;
      border-radius: 1em;
      background: black;
    }
  }

  @media screen and (min-width: 700px) {
    .projects-slider {
      border: 0;
      box-shadow: none;
      padding: 6em 6em 0;
    }

    .pagination { height: 6em; }
  }
</style>