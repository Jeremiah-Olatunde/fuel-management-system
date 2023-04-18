<script lang="ts">
  import { scroll, animate } from "motion";
  import { initializeSlotScreen } from "@/assets/scripts/slot";

  export default {
    props: { activeSection: { type: String, required: true } },
    mounted: function() {
      scroll(animate("#progress", { width: ["0", "100%"] }));
      if(document.documentElement.clientWidth < 700)
        initializeSlotScreen(".nav-list");
    }
  }  
</script>

<template>
    <nav class="navbar">
      <h2 class="logo">
        <span class="namor">namor</span>
        <span class="tech">technologies</span> 
        <span class="dot">.</span>
      </h2>

      <ul class="nav-list">
        <li :class="`nav-item ${activeSection == 'home' ? 'active' : ''}`">
          <a class="nav-link" href="#home-section" >home</a>
        </li>
        <li :class="`nav-item ${activeSection == 'services' ? 'active' : ''}`">
          <a class="nav-link" href="#services-section" >services</a>
        </li>
        <li :class="`nav-item ${activeSection == 'projects' ? 'active' : ''}`">
          <a class="nav-link" href="#projects-section" >projects</a>
        </li>
        <li :class="`nav-item ${activeSection == 'contact' ? 'active' : ''}`">
          <a class="nav-link" href="#contact-section" >contact</a>
        </li>
      </ul>

      <div class="progress" id="progress"></div>
    </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: var(--navbar-height);
    padding: 0 2em;

    z-index: 2;
    top: 0; left: 0;
    position: fixed;

    background: white;
    box-shadow: 0 0 1em black;
    border-bottom: .5em solid black;

    .progress {
      content: "";
      position: absolute;
      bottom: -.5em; left: 0;
      width: 0%; height: .5em;
      border-radius: .5em;
      background: var(--accent-dark);
    }

    .logo {
      font-size: 2em;
      font-weight: 900;
      letter-spacing: .25em;
      text-transform: uppercase;

      .tech { display: none; margin-left: 1em; }
      .dot { position: absolute; color: var(--accent);  }
    }

    .nav-list { 
      height: 100%; 
      display: flex; 
      flex-direction: column;
      align-items: center;
    }

    .active, .nav-item:hover > .nav-link { color: var(--accent); }

    .nav-item {
      padding: 1em 0; 
      cursor: pointer;


      .nav-link {
        font-weight: 700;
        font-size: 1.75em;
        font-variant: small-caps; 
        transition: color .2s ease;

        height: 100%;
        display: grid;
        place-items: center;
      }

    }
  }

  @media screen and (min-width: 600px){
    .navbar {
      padding: 0 8em;
      .logo .tech { display: inline-block; }
      .nav-list { height: 100%; flex-direction: row; }
      .nav-item { padding: 0 4rem; }
      .nav-item:last-child { padding-right: 0; }
    }
  }
</style>
