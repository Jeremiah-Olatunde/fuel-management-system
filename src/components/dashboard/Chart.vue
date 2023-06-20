<script lang="ts">

  import Chart from "chart.js/auto";

  export default {
    data: function(){ return { graph: "temps" } },
    methods: {
      hideTemps: function(){
        const temps = document.getElementById("temps");
        if(!(temps instanceof HTMLCanvasElement)) throw new Error("chart init error");
        temps.style.display = "none";
      },

      initTemps: function(){
        const temps = document.getElementById("temps");
        if(!(temps instanceof HTMLCanvasElement)) throw new Error("chart init error");

        temps.style.display = "block";


        const { width, height } = getComputedStyle(temps);
        temps.width = parseFloat(width); 
        temps.height = parseFloat(height);

        temps.style.display = "none";


        const temperatureData = [20, 22, 25, 28, 30, 32, 34, 33, 31, 28, 24, 21];
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June', 
          'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const lineChart = new Chart(temps, {
          type: 'line',
          data: {
            labels: months, // X-axis labels
            datasets: [
              {
                label: 'Temperature',
                data: temperatureData, // Y-axis data
                fill: false,
                borderColor: 'rgb(178, 34, 34)',
                tension: 0.1
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Temperature (°C)'
                }
              }
            }
          }
        });        
      },

      showTemps: function(){
        const temps = document.getElementById("temps");
        if(!(temps instanceof HTMLCanvasElement)) throw new Error("chart init error");
        temps.style.display = "block";        
      },           

      hideLevels: function(){
        const levels = document.getElementById("levels");
        if(!(levels instanceof HTMLCanvasElement)) throw new Error("chart init error");
        levels.style.display = "none";
      }, 

      showLevels: function(){
        const levels = document.getElementById("levels");
        if(!(levels instanceof HTMLCanvasElement)) throw new Error("chart init error");
        levels.style.display = "block";        
      },     

      initLevels: function(){
        const levels = document.getElementById("levels");
        if(!(levels instanceof HTMLCanvasElement)) throw new Error("chart init error");

        levels.style.display = "block";


        const { width, height } = getComputedStyle(levels);
        levels.width = parseFloat(width); 
        levels.height = parseFloat(height);

        levels.style.display = "none";

        const levelData = [];
        for(let i = 100; 0 < i; i = i - 4.25)
          levelData.push(Math.floor(i - Math.random() * 5));

        levelData.pop();
        levelData.push(0);

        const temperatureData = Array(24).fill("").map(x => Math.random() * 100);
        const time = [
          ...Array(10).fill("").map((x, i) => `0${i}:00`),  
          ...Array(14).fill("").map((x, i) => `${i + 10}:00`)        
        ];

        const lineChart = new Chart(levels, {
          type: 'line',
          data: {
            labels: time, // X-axis labels
            datasets: [
              {
                label: 'Fuel Levels',
                data: levelData, // Y-axis data
                fill: false,
                borderColor: 'rgb(178, 34, 34)',
                tension: 0.1
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Level (%)'
                }
              }
            }
          }
        });        
      },
    },
    mounted: function(){   
      this.initLevels();
      this.initTemps();

      this.showLevels();

      const tempsBtn = this.$refs.temps as HTMLElement;  
      const levelsBtn = this.$refs.levels as HTMLElement;  

      tempsBtn.addEventListener("click", () => {
        this.hideLevels(); this.showTemps();
        tempsBtn.classList.add("bullet-active");
        levelsBtn.classList.remove("bullet-active");
      });

      levelsBtn.addEventListener("click", () => {
        this.hideTemps(); this.showLevels();
        levelsBtn.classList.add("bullet-active");
        tempsBtn.classList.remove("bullet-active");
      })
    }
  }
</script>

<template>
  <div class="charts" style="grid-area: charts;">
    <div class="chart-container">
      <canvas id="temps" class="chart temps" style="display: none;"></canvas>
      <canvas id="levels" class="chart levels" style="display: none;"></canvas>
    </div>
    <ul class="pagination">
      <li class="bullet bullet-active" ref="levels"></li>
      <li class="bullet" ref="temps"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .charts {
    background: rgba(184, 134, 11, .1);
    display: grid;
    grid-template-rows: auto min-content;

    .pagination {
      display: flex;
      align-items: center;
      justify-content: right;
      padding: 1em;

      .bullet {
        cursor: pointer;
        height: 1.25em;
        aspect-ratio: 1;
        margin: 0 .25em;
        border-radius: 100%;
        border: 2px solid darkgoldenrod;
        transition: aspect-ratio .2s ease-out;
      }

      .bullet-active {
        aspect-ratio: 1.75;
        border-radius: 1em;
        background: firebrick;
      }        
    }

    .chart { width: 100%; height: 100%; }
  }   
</style>