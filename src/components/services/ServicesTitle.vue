
<template>
  <div class="services-title">
      <header class="services-header section-header">
        <h3 class="main-header">best <br> in the <br> business</h3>
        <h4 class="sub-header">we give only the best to our elite clients</h4>
      </header>
  </div>
</template>

<style lang="scss" scoped>

  .services-title {
    display: none;
  }

  @media screen and (min-width: 700px) {
    .services-title {
      padding-left: 5em;

      position: sticky;
      top: var(--navbar-height);

      display: grid;
      align-items: center;
      height: calc(100vh - var(--navbar-height));

      .services-header {
        .main-header { font-size: 10em; }
        .sub-header { font-size: 2.25em; }
      }
    }
  }

</style>
