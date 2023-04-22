<script lang="ts">
  export default {
    emits: ['open']
  }
</script>

<template>
  <aside class="home-book">
    <div class="book-card card">
      <img class="image" src="@/assets/images/chevron/(2).jpg" alt="image of chevron home exterior">
      <div class="number"></div>
      <header class="header">
        <h2 class="main-header">book<br>a stay in<br> chevron</h2>

        <button 
          class="book-button card-button button-solid-accent-light" 
          @click="$emit('open', 'chevron')"
        > book! </button>
      </header>
    </div>

    <a class="works-wrapper" href="#projects-section">
      <button class="main-header works-button">our works</button>
    </a>
  </aside>
</template>

<style lang="scss" scoped>

  .home-book {
    .card .image {
      opacity: 0.7;
    }
    padding: 0 2em 2em;

    display: grid;
    // grid-column-gap: 3em;
    grid-template-rows: .95fr .15fr;
    grid-template-areas: "namor"
                          "button";

    .book-card {
      grid-area: namor;
      border: 5px solid black;
      box-shadow: 0 0 1em black;

      .header {
        padding: 2em;
        .main-header { font-size: 3.5em; }
        .book-button { font-size: 1.5em; }
      }
    }

    .works-wrapper {
      grid-area: button;
      display: grid;
      place-items: center;

      writing-mode: vertical-lr;
      // transform: rotate(180deg);

      background: var(--accent-dark);  
      border: .5rem solid black;
      border-left: 0;

      box-shadow: 0 0 10px black;

      .works-button {
        cursor: pointer;
        padding: .15em;
        font-size: 3.25em; 
        letter-spacing: .25em;
        color: white;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .home-book { 
      padding: 0;
      display: block;

      .works-wrapper { display: none; }

      .book-card {
        margin-left: auto;

        height: 80vh;
        aspect-ratio: 1 / 1.5;
        border: 0;
        box-shadow: rgba(0, 0, 0, .7) 0 1rem 3rem;

        .header { padding: 3em; }
      }
    }
  }
</style>