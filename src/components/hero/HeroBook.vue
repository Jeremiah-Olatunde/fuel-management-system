<script lang="ts">
  export default {
    emits: ['open']
  }
</script>

<template>
  <aside class="hero-book">
    <div class="book-card card">
      <img class="image" src="@/assets/images/cozy.jpg" alt="">
      <div class="number">01</div>
      <header class="header">
        <h4 class="main-header">
          book <br> a night <br>in chervron
        </h4>
        <button 
          class="book-button card-button button-solid-accent-light" 
          @click="$emit('open', 'chevron')"
        >
          book!
        </button>
      </header>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  .hero-book { 
    display: grid;
    align-items: center;
    font-size: 1rem; // 1280 x 720 = 1rem;

    .book-card {
      width: 80%; height: 85%;

      .number { padding: .6em; font-size: 5em; }

      .header {
        padding: 3em;
        .main-header { font-size: 3.7em; }
        .book-button { font-size: 2em; }
      }
    }
  }
</style>