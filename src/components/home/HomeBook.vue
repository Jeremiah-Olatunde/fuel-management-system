<script lang="ts">
  export default { emits: ['open'] }
</script>

<template>
  <aside class="home-book">
    <div class="book-card card">
      <img 
        class="image" 
        alt="image of chevron home exterior"
        src="@/assets/images/chevron/facade.jpg" 
      >

      <header class="header">
        <h2 class="main-header">book<br>a stay in<br> chevron</h2>

        <button 
          @click="$emit('open', 'chevron')"
          class="book-button card-button button-solid-accent-light" 
        > book! </button>
      </header>
    </div>

    <a  class="works-link" href="#projects-section">
      <button class="works-button">
        <p class="main-header button-text">projects</p>
      </button>
    </a>
  </aside>
</template>

<style lang="scss" scoped>

  .home-book {
    padding: 0 0 2em 2em;

    display: grid;
    grid-column-gap: 3em;
    grid-template-columns: calc(80% - 1.5em) calc(20% - 1.5em);

    .book-card {
      border: .4em solid black;
      box-shadow: 0 0 1em black;

      .header {
        padding: 2em;
        .main-header { font-size: 3.5em; }
        .book-button { font-size: 1.5em; }
      }
    }

    .works-button {
      cursor: pointer;

      display: grid;
      place-items: center;
      height: 100%; width: 100%;

      transform: rotate(180deg);

      background: var(--accent-dark);  
      border: .4em solid black;
      border-left: 0;
      box-shadow: 0 0 10px black;

      .button-text {
        color: white;
        font-size: 3.5em; 
        letter-spacing: .5em;
        writing-mode: vertical-rl;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .home-book { 
      padding: 0;
      display: block;

      .works-link { display: none; }

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