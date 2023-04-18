<template>
    <header class="section-header projects-header">
      <h2 class="main-header">projects</h2>
    </header>
</template>

<style lang="scss" scoped>
  .projects-header {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    height: calc(100vh - var(--navbar-height));

    border: .5rem solid black;
    border-right: 0;

    box-shadow: 0 0 10px black;
    background: var(--accent-dark);  

    .main-header {
      padding: .15em;
      font-size: 5em; 
      letter-spacing: 3rem;
      color: white;
      text-align: center;
    }
  }
</style>