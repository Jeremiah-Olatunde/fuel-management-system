
<template>
  <div class="services-title">
      <header class="services-header section-header">
        <h1 class="main-header">best <br> in the <br> business</h1>
        <h2 class="sub-header">we give only the best to our elite clients</h2>
      </header>
  </div>
</template>

<style lang="scss" scoped>
  .services-title {
    font-size: 1rem; // 1280 x 720 = 1rem;
    padding-left: 5em;

    position: sticky;
    top: var(--navbar-height);

    display: grid;
    align-items: center;
    height: calc(100vh - var(--navbar-height));

    .services-header {
      .main-header { font-size: 9em; }
      .sub-header { font-size: 2.25em; }
    }
  }
</style>
