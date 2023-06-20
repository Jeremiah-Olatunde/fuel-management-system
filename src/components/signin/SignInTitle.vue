<template>
  <div class="signin-title">
    <div class="navbar">
      <h2 class="logo">
        <span class="namor">enabulele</span>
        <span class="tech">enterprises</span> 
        <span class="dot">.</span>
      </h2>
    </div>
    <div class="signin-content">
      <header class="signin-header section-header">
        <h3 class="main-header"> 
          control <br>
          n<span style="color: darkgoldenrod;">'</span> 
          tracking <br> 
          dashboard
        </h3>
        <h4 class="sub-header">data monitoring and statistics tracking dashboard.</h4>
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .signin-title { display: none; }

  @media screen and (min-width: 700px) {
    .signin-title {
      z-index: 100;
      display: grid;
      grid-template-rows: min-content auto;
      border-right: 3.5px solid black;

      .navbar {
        padding: 2em 5em;
        width: 100%;

        border-bottom: 3.5px solid black;

        &::before {
          content: "";
          height: 15px;
          display: block;
          position: absolute;

          aspect-ratio: 1;
          right: 0; bottom: 0;
          transform: translate(calc(50% + 1.75px), calc(50% + 1.75px));
          
          border: 3.5px solid black;
          background: darkgoldenrod;
        }

        .logo {
          font-size: 1.5em;
          font-weight: 900;
          letter-spacing: .25em;
          text-transform: uppercase;

          .tech { margin-left: 1em; }
          .dot { position: absolute; color: var(--accent);  }
        }        
      }

      .signin-header {

        padding: 5em;
        padding-top: 12em;
        .main-header{ font-size: 9em; }
        .sub-header { font-size: 2.25em; }
      }
    }
  }
</style>

<!-- petroleum monitoring dashboard -->