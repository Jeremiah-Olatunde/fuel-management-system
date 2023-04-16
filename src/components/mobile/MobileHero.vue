<template>
  <section class="mobile-hero-section section">
    <div class="hero-title">
      <header class="hero-header section-header">
        <h1 class="main-header">enigeering that excites </h1>
      </header>
      <button class="more-button">
        <span class="dash">&mdash;&mdash;</span>
        get in touch
      </button>
    </div>

    <aside class="hero-book">
      <div class="baz">
        <div class="main-header">our works</div>
      </div>

      <div class="book-card card">
        <img class="image" src="@/assets/images/cozy.jpg" alt="">
        <div class="number">01</div>
        <header class="header">
          <h2 class="main-header">
            book <br> a night in <br> chervron
          </h2>
          <button 
            class="book-button card-button button-solid-accent-light" 
            @click="$emit('open', 'chevron')"
          >
            book!
          </button>
        </header>
      </div>
    </aside>

  </section>
</template> 

<style lang="scss" scoped>
  .mobile-hero-section {
    padding: 8rem 2rem 2rem 2rem;
    display: grid;
    grid-template-rows: min-content auto;
    // background: darkgoldenrod;
    // font-size: .9rem;

    .hero-title {
      padding: 5rem 0;
      .hero-header .main-header { font-size: 4em; }

      .more-button {
        font-size: 2.5em;
        font-weight: 800;
        font-variant: small-caps;   
        color: darkgoldenrod;

        padding-top: .5em;
        letter-spacing: 0em;

        .dash { letter-spacing: 0; margin-right: .5em; }
      }
    }

    .hero-book { 
      font-size: .8em; // 1280 x 720 = 1rem;

      .book-card {
        width: 80%; height: 100%;
        border: 5px solid black;
        box-shadow: 0 0 10px black;

        .number { padding: .6em; font-size: 5em; }

        .header {
          padding: 3em;
          .main-header { font-size: 4.5em; }
          .book-button { font-size: 2em; }
        }
      }
    }

    .baz {
      right: -2rem;

      position: absolute;
      width: 20%; height: 100%;

      display: grid;
      place-items: center;

      writing-mode: vertical-lr;
      transform: rotate(180deg);

      background: var(--accent-dark);  
      border: .5rem solid black;
      border-left: 0;

      box-shadow: 0 0 10px black;

      .main-header {
        padding: .15em;
        font-size: 5em; 
        color: white;
        text-align: center;
      }
    }
  }
</style>