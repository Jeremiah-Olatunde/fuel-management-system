<script lang="ts">
  import { scroll, animate } from "motion";
  import { initializeSlotScreen } from "@/assets/scripts/slot";

  export default {
    props: { activeSection: { type: String, required: true } },
    mounted: function() {
      scroll(animate("#progress", { width: ["0", "100%"] }));
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
        <li :class="`nav-item ${activeSection == 'hero' ? 'active' : ''}`">
          <a class="nav-link" href="#hero-section" >home</a>
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
    padding: 0 2rem;

    z-index: 2;
    top: 0; left: 0;
    position: fixed;

    background: white;
    box-shadow: 0 0 10px black;

    &::before {
      content: "";
      position: absolute;
      bottom: .0; left: 0;
      width: 100%; height: .5em;
      background: black;
    }

    .progress {
      content: "";
      position: absolute;
      bottom: .0; left: 0;
      width: 0%; height: .5em;
      border-radius: .5em;
      background: var(--accent-dark);
    }

    .logo {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: .5rem;
      text-transform: uppercase;

      .dot { position: absolute; color: var(--accent);  }
      .tech { display: none; }
    }

    .nav-list { 
      height: 100%; 
      display: flex; 
      flex-direction: column;
      align-items: center;
    }

    .active, .nav-item:hover > .nav-link { color: var(--accent); }

    .nav-item {
      padding: 1rem 0; 
      // padding: 0 4rem;
      cursor: pointer;


      .nav-link {
        font-weight: 700;
        font-size: 1.75rem;
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
      .nav-list { height: 100%; flex-direction: row; }
      .nav-item { padding: 0 4rem; }
      .nav-item:last-child { padding-right: 0; }
    }
  }
</style>
