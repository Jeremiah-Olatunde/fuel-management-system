<script lang="ts"> 

  import ChartsVue from "./Chart.vue";
  import NavbarVue from "./Navbar.vue";
  import TanksVue from "./Tanks.vue";

  export default {
    components: { ChartsVue, NavbarVue, TanksVue },
    mounted: function(){},
  }

</script>

<template>
  <section class="dashboard-section dotted-bg">
    <header class="dashboard-header" style="grid-area: title;">
      <h2 class="main-header">dashboard</h2>
    </header>     

    <div class="dashboard-container">
      <div class="dashboard">
        <NavbarVue></NavbarVue>

        <TanksVue> </TanksVue>

        <ChartsVue> </ChartsVue>
      </div>
    </div>    
  </section>     
</template> 

<style lang="scss" scoped>
  .dashboard-section {
    height: 100vh;
    overflow: hidden;

    display: grid;
    grid-row-gap: 0;
    grid-template-rows: 100%;
    grid-template-columns: min-content auto;
    grid-template-areas: "title slider";
    align-items: center;
  }

  .dashboard-header {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    height: 90vh;
    box-shadow: 0 0 10px black;


    border: .4em solid black;
    border-right: 0;

    background: var(--accent-dark);  

    .main-header {
      font-size: 4em; 
      color: white;
      padding: 0 .35em;
      text-align: center;
      letter-spacing: 3rem;
      margin-bottom: -3rem;
    }
  }

  .dashboard-container {
    width: 70%;
    aspect-ratio: 1.75;
    justify-self: center;

    background: white;
    border: .5rem solid black;
    box-shadow: 
      2px 2px 0  darkgoldenrod, 
      5px 5px 0 black,
      3px 3px 10px black
    ;
  
    .dashboard {
      width: 100%; height: 100%;
      display: grid;
      grid-column-gap: 2em;
      grid-template-rows: min-content auto;
      grid-template-columns: .45fr .55fr;
      grid-template-areas: "navbar navbar" "tanks charts";

      padding: 3em 5em; 
    }
  }

</style>