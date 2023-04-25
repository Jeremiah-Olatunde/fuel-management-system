<template>
  <section class="projects">
    <header class="section-header">
      <h2 class="main-header">projects</h2>
    </header>

      <figure class="swiper-slide project-slide card active" @click="$emit('open', 'chevron')">
        <img class="image" src="@/assets/images/chevron/facade.jpg" alt="">
        <div class="number"></div>
        <figcaption class="project-header header">
          <h3 class="main-header">home <br> rentals</h3>
        </figcaption>
      </figure>    
  </section>
</template>

<style lang="scss" scoped>
  .projects {
    padding: 8rem 2em 2em 2em;

    height: 100vh;
    // background: var(--accent);
    // background: black;

    .section-header {
      padding: 5em 0 ;
      text-align: center;

      .main-header {
        // color: white;
        font-size: 3.5em;
        letter-spacing: .5em;
      }
    }


    .project-slide {
      transition: opacity .25s ease;
      aspect-ratio: .5;
      width: 90%;
      margin: auto;

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

  }
</style>