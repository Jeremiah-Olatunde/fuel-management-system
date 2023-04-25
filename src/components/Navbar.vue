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

      <div class="nav-container">
        <ul class="nav-list">
          <li :class="`nav-item ${activeSection == 'home' ? 'active' : ''}`">
            <a class="nav-link" href="#home-section" >home</a>
          </li>
          <li :class="`nav-item ${activeSection == 'about' ? 'active' : ''}`">
            <a class="nav-link" href="#about-section" >about</a>
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
      </div>

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
    padding: 2em;

    z-index: 2000;
    top: 0; left: 0;
    position: fixed;

    background: white;
    box-shadow: 0 0 1em black;
    border-bottom: .4em solid black;

    .progress {
      content: "";
      position: absolute;
      bottom: -.4em; left: 0;
      width: 0%; height: .4em;
      border-radius: .4em;
      background: var(--accent);
    }

    .logo {
      font-size: 2em;
      font-weight: 900;
      letter-spacing: .25em;
      text-transform: uppercase;

      .tech { display: none; margin-left: 1em; }
      .dot { position: absolute; color: var(--accent);  }
    }

    .nav-container { overflow: hidden; height: 100%; }

    .nav-list { 
      height: 100%;
      display: flex; 
      align-items: center;
      flex-direction: column;
    }

    .nav-item {
      height: 100%;
      padding: 1em 0; 
      cursor: pointer;
    }

    .nav-link {
      font-weight: 700;
      font-size: 1.5em;
      font-variant: small-caps; 
      transition: color .2s ease;

      height: 100%;
      display: grid;
      place-items: center;
    }

    .active, .nav-item:hover > .nav-link { color: var(--accent); }
  }

  @media screen and (min-width: 700px){
    .navbar {
      padding: 0 8em;
      .logo .tech { display: inline-block; }
      .nav-list { flex-direction: row; }
      .nav-item { padding: 0 3em; }
      .nav-item:last-child { padding-right: 0; }
    }
  }

  @media screen and (min-width: 1400px) {
    .navbar { font-size: 1.15rem; }
  }

  @media screen and (min-width: 1700px) {
    .navbar { font-size: 1.35rem; }
  }
</style>
