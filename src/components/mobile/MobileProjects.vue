<template>
  <section class="section mobile-projects">
    <header class="section-header projects-header">
      <h2 class="main-header">projects</h2>
    </header>

    <div class="projects-slider">
      <div class="project-card card">
        <img class="image" src="@/assets/images/crane.jpg" alt="">
        <div class="number number-focus">01</div>
        <header class="project-header header">
          <h3 class="main-header">crane <br> building</h3>
        </header>
      </div> 

      <div class="project-card card">
        <img class="image" src="@/assets/images/burj.jpg" alt="">
        <div class="number">02</div>
        <header class="project-header header">
          <h3 class="main-header">burj <br> khalifa</h3>
        </header>
      </div>    

      <div class="project-card card">
        <img class="image" src="@/assets/images/offshore.jpg" alt="">
        <div class="number">03</div>
        <header class="project-header header">
          <h3 class="main-header">lagos <br> oil well</h3>
        </header>
      </div>   
    </div>

  </section>
</template>

<style lang="scss" scoped>
  .mobile-projects {
    display: flex;
    margin-bottom: 0;
  }

  .projects-header {
    z-index: 1;
    top: var(--navbar-height);
    position: sticky;
    writing-mode: vertical-lr;
    transform: rotate(180deg);

    background: var(--accent-dark);  
    border: .5rem solid black;
    border-right: 0;
    height: calc(100vh - var(--navbar-height));

    box-shadow: 0 0 10px black;

    .main-header {
      padding: .15em;
      font-size: 5em; 
      color: white;
      text-align: center;
    }
  }

  .projects-slider{
    display: grid;
    grid-template-rows: repeat(3, calc(100vh - var(--navbar-height)));

    .project-card {
      border-bottom: 5px solid black;

      .number { font-size: 4em; padding: .6em; }

      .project-header {
        padding: 3em;
        .main-header { font-size: 4em; }
      }
    }
  }
</style>