
<template>
  <div class="home-title">
    <header class="section-header home-header">
      <h1 class="main-header">leaders in <br> engineering</h1>
      <h2 class="sub-header">a better nigeria through engineering excellence</h2>
    </header>

    <p class="home-text text">
      We use our industry leading expertise to provide quality services
      to our clients across various engineering disciplines.
    </p>

    <a href="#contact-section">
      <button class="home-button-sm dash-button">get in touch</button>
    </a>

    <a href="#contact-section">
      <button class="home-button-lg button-solid-black">reach out</button>
    </a>

    <a href="#projects-section">
      <button class="home-button-lg button-border">our works</button>
    </a>
  </div>
</template>

<style lang="scss" scoped>

  .home-title {
    padding: 5em 2em;

    .home-header .main-header { font-size: 4.25em; }

    .home-button-sm {
      font-size: 2.5em;
      padding-top: .5em;
      color: darkgoldenrod;
    }

    .home-text, 
    .home-button-lg,
    .home-header .sub-header { display: none; }
  }

  @media screen and (min-width: 700px) {
    .home-title {
      padding: 0;

      .home-header {
        .main-header { font-size: 8em; }
        .sub-header { font-size: 2.15em; display: block; }
      }

      .home-text {
        display: block;
        font-size: 1.5em;
        width: min(90%, 800px);
      }

      .home-button-sm { display: none; }

      .home-button-lg {
        display: inline-block;

        font-size: min(2em, 22px);
        padding: 1em 2em;
        border-width: .25em;
        margin: 1em .5em 0 0;
      }
    }
  }
</style>
