<template>  
  <div class="tanks" style="grid-area: tanks;">
    <div class="density reading" style="grid-area: density;">
      <div class="title">density</div>
      <div class="value">
        <div class="number">0.83</div>
        <div class="unit">kg/l</div>
      </div>
    </div>

    <div class="temperature reading" style="grid-area: temperature;">
      <div class="title">temperature</div>
      <div class="value">
        <div class="number">33&deg;</div>
        <div class="unit">celsius</div>
      </div>
    </div>


    <div class="fuel-level" style="grid-area: gauge;">
      <div class="title">fuel level : <span style="color: rgba(184, 134, 11, .75)">75%</span></div>
      <div class="meter">
        <div class="gauge">
          <div class="level"></div>
          <div class="ullage"></div>
        </div>
      </div>

      <ul class="labels">
        <li class="label">
          <div class="color level"></div> level
        </li>        
        <li class="label">
          <div class="color ullage"></div> ullage
        </li>
      </ul>
    </div>                                    
  </div>
</template>

<style lang="scss" scope>
  .tanks {
    padding: 3em;
    // border: 3px solid black;
    // box-shadow: 0 0 10px rgba(178, 34, 34, .1);
    background: rgba(178, 34, 34, .1);

    display: grid;
    grid-template-columns: .5fr .5fr;
    grid-template-rows: .35fr auto min-content;
    grid-template-areas: "temperature density" ". ." "gauge gauge";

    .title {
      font-size: 2em;
      font-weight: 800;
      font-variant: small-caps;

      letter-spacing: -.075rem;
      text-transform: capitalize;
      padding-bottom: .75em;
    }

    .reading {
      display: grid;
      grid-template-rows: min-content auto;
      place-items: center;


      .value {
        align-self: center; 
        text-align: center;

        .number {
          color: rgba(178, 34, 34, .75);       
          font-weight: 900;
          font-size: 4em;
          padding-bottom: .2em;
        }

        .unit {
          color: rgba(178, 34, 34, .45);    
          font-size: 2em;
          font-weight: 600;
          font-variant: small-caps;
        }
      }
    }

    .fuel-level {
      padding-top: 1em;
      display: grid;
      grid-template-rows: auto min-content;

      .labels {
        display: flex;
        justify-content: space-between;
        margin-top: 1em;

        .label {
          font-size: 1.2em;
          font-weight: 800;
          font-variant: small-caps;

          letter-spacing: .2em;
          margin-bottom: .5em;

          display: flex;
        }

        .color {
          aspect-ratio: 1;
          height: 1.2em;
          border-radius: 50%;
          border: 2px solid black;
          margin-right: .5em;
        }

        .ullage { background: firebrick; }
        .level { background: darkgoldenrod; }
      }     
  
      .meter {
        width: 100%;
        height: 100%;

        .gauge {
          margin: 1em 0 1em;
          width: 100%;

          aspect-ratio: 12.5;
          border: 4px solid black;
          border-radius: 50px;

          &::before {
            content: "";
            display: block;
            height: 250%;
            width: 5px;
            background: black;
            position: absolute;
            top: 50%; left: 75%;
            transform: translate(-50%, -50%);
          }

          .level {
            position: absolute;
            top: 0; left: 0;
            background: rgba(184, 134, 11, .75);
            width: calc(75% - 2.5px);
            height: 100%;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
          }

          .ullage {
            background: rgb(178, 34, 34, .75);
            width: calc(25% - 2.5px);
            height: 100%;
            position: absolute;
            top: 0; right: 0;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;            
          }
        }
      }
    }
  }
</style>