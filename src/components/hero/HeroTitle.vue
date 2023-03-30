
<template>
  <div class="home-title">
    <header class="home-header section-header">
      <h1 class="main-header">the quick  brown fox </h1>
      <h2 class="sub-header">lorem ipsum dolor sit amet consectetur.</h2>
    </header>
    <p class="home-text text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim amet exercitationem ab eveniet officiis foba de.
    </p>
    <a href="#contact-section">
      <button class="home-button button-solid-black">reach out</button>
    </a>
    <a href="#projects-section">
      <button class="home-button button-border">our works</button>
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .home-title {
    font-size: 1.15rem; // 1280 x 720 = 1rem;
    margin: auto 0 auto 8em;

    .home-header {
      .main-header { font-size: 8em; }
      .sub-header { font-size: 2.5em; }
    }

    .home-text {
      width: 85%;
      font-size: 1.5em;
      padding-top: 1em;
    }

    .home-button {
      font-size: 2em;
      margin-top: 2rem;
      margin-right: 1rem;
      padding: 2rem 4rem;
    }
  }
</style>
