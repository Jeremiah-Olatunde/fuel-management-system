<template>
  <div class="contact-title">
      <div class="contact-content">
        <header class="contact-header section-header">
          <h3 class="main-header">don't <br> hesitate. <br>reach out!</h3>
          <h4 class="sub-header">we are always eager to talk to new clients</h4>
        </header>
      </div>
  </div>
</template>

<style lang="scss" scoped>

  .contact-title { display: none; }

  @media screen and (min-width: 700px) {
    .contact-title {
      display: grid;
      place-items: center;

      .contact-header {
        .main-header{ font-size: 10em; }
        .sub-header { font-size: 2.25em; }
      }
    }
  }
</style>
