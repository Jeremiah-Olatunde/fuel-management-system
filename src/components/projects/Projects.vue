<template>
    <section class="projects-section section" id="projects-section">
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
  .projects-section {
    font-size: 1.15rem; // 1280 x 720 = 1rem;

    display: flex;
    height: 100vh;

    .projects-header {
      writing-mode: vertical-lr;
      transform: rotate(180deg);

      background: var(--accent-light);  
      border: .5rem solid black;
      border-right: 0;
      height: calc(100vh - var(--navbar-height));

      box-shadow: 0 0 10px black;

      .main-header {
        padding: .15em;
        font-size: 8em; 
        color: white;
        text-align: center;
      }
    }

    .projects-slider {
      height: 100%;
      padding: 6em;

      display: grid;
      place-items: center;
      grid-column-gap: 6em;
      grid-template-rows: 100%;
      grid-template-columns: repeat(3, 1fr);

      .project-card {
        width: 100%; height: 100%;

        .number { font-size: 4em; padding: .6em; }

        .project-header {
          padding: 3em;
          .main-header { font-size: 4em; }
        }
      }
    }
  }
</style>