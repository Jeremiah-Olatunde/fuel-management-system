
<template>
  <div class="hero-title">
    <header class="hero-header section-header">
      <h2 class="main-header">building <br> tomorrow  </h2>
      <h3 class="sub-header">lorem ipsum dolor sit amet consectetur.</h3>
    </header>
    <p class="hero-text text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim amet exercitationem ab eveniet officiis foba de.
    </p>
    <a href="#contact-section">
      <button class="hero-button button-solid-black">reach out</button>
    </a>
    <a href="#projects-section">
      <button class="hero-button button-border">our works</button>
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .hero-title {
    font-size: 1rem; // 1280 x 720 = 1rem;
    margin: auto 0 auto 8em;

    .hero-header {
      .main-header { font-size: 8em; }
      .sub-header { font-size: 2.5em; }
    }

    .hero-text {
      width: 85%;
      font-size: 1.5em;
      padding-top: 1em;
    }

    .hero-button {
      font-size: 2em;
      margin-top: 2rem;
      margin-right: 1rem;
      padding: 2rem 4rem;
    }
  }
</style>
