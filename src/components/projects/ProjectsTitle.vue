<template>
    <header class="section-header projects-header">
      <h2 class="main-header">projects</h2>
    </header>
</template>

<style lang="scss" scoped>
  .projects-header {

    box-shadow: 0 0 10px black;
    background: black;  
    grid-area: title;

    .main-header {
      padding: .75em 0;
      font-size: 3em; 
      letter-spacing: 1.5rem;
      color: white;
      text-align: center;
    }
  }


  @media screen and (min-width: 700px) {
    .projects-header {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      height: calc(100vh - var(--navbar-height));

      border: .4em solid black;
      border-right: 0;

      background: var(--accent-dark);  

      .main-header {
        padding: 0 .25em;
        font-size: 4em; 
        letter-spacing: 3rem;
      }
    }
  }

</style>