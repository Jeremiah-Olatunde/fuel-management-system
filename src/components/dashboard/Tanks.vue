<script lang="ts">
  export default {
    data: function(){ return { 
      temperature: 0,
      level: 0,
    } },
    computed: {
      animTemp: function(){

      }
    },
    mounted: async function(){
      console.log("Tanks mounted");

      const bar = document.getElementById("bar");
      const indicator = document.getElementById("indicator");

      if(!(bar instanceof HTMLCanvasElement)) throw new Error("fuel bar init error");
      if(!(indicator instanceof HTMLDivElement)) throw new Error("indicator bar init error");

      const { width, height } = getComputedStyle(bar.parentElement!);
      bar.width = parseFloat(width); 
      bar.height = parseFloat(height);

      const ctx = bar.getContext("2d");
      if(!ctx) throw new Error("canvas context Error");

      setInterval(() => {
        fetch("https://ny3.blynk.cloud/external/api/get?token=iGFs8Sumvs_DD3CC_Za696Y-NcQm-qxx&v0")
          .then(response => response.json())
          .then(temperature => this.$data.temperature = temperature)
          .catch(error => console.log("failed to retrieve temperature"));

        fetch("https://ny3.blynk.cloud/external/api/get?token=iGFs8Sumvs_DD3CC_Za696Y-NcQm-qxx&v1")
          .then(response => response.json())
          .then(level => {
            this.$data.level = level;

            indicator.style.left = `${level}%`;
            if(level < 2 || 98 < level) indicator.style.opacity = "0";
            else indicator.style.opacity = "1";

            bar.style.backgroundPosition = `${100 - level}% 0`;

            // const grad = ctx.createLinearGradient(0, 0, parseFloat(width), 0);
            // grad.addColorStop(level / 100, "darkgoldenrod");
            // grad.addColorStop(level / 100, "firebrick");   

            // ctx.fillStyle = grad;
            // ctx.fillRect(0, 0, parseFloat(width), parseFloat(height));              
          })
          .catch(error => console.log("failed to retrieve level"));
      }, 500);
    }
  }
</script>

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
        <div class="number">{{ temperature }}&deg;</div>
        <div class="unit">celsius</div>
      </div>
    </div>


    <div class="fuel-level" style="grid-area: gauge;">
      <div class="title">fuel level : <span style="color: rgba(184, 134, 11, .75)">{{ level }}%</span></div>
      <div class="meter">
        <canvas class="bar" id="bar"></canvas>
        <div class="indicator" id="indicator"></div>
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
    background: rgba(178, 34, 34, .1);

    display: grid;
    // grid-template-columns: .5fr .5fr;
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
  
      .bar {
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background: linear-gradient(90deg, darkgoldenrod 50%, firebrick 50%);
        background-size: 200%;
        background-position: 100% 0%;
        transition: all 1s ease-in-out;
      }

      .meter {
        border: 4px solid rgba(0, 0, 0, 1);
        border-radius: 55px;
        height: 30px;
        width: 100%;
      }

      .indicator {
        width: 5px;
        height: 200%;

        border-radius: 50px;
        background: rgba(0, 0, 0, 1);

        position: absolute;
        top: 50%; left: 0;
        transform: translate(-50%, -50%);

        transition: all 1s ease-in-out;          
      }
    }
  }
</style>