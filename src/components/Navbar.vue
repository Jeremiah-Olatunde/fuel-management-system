<script lang="ts">
  export default {
    props: { activeSection: { type: String, required: true } },
  }  
</script>

<template>
    <nav class="navbar">
      <h2 class="logo">
        namor technologies <span class="dot">.</span>
      </h2>

      <ul class="nav-list">
        <li class="nav-item">
          <a 
            href="#hero-section" 
            :class="`nav-link ${activeSection == 'hero' ? 'active' : ''}`"
          >home</a>
        </li>
        <li class="nav-item">
          <a 
            href="#services-section" 
            :class="`nav-link ${activeSection == 'services' ? 'active' : ''}`"
          >services</a>
        </li>
        <li class="nav-item">
          <a 
            href="#projects-section" 
            :class="`nav-link ${activeSection == 'projects' ? 'active' : ''}`"
          >projects</a>
        </li>
        <li class="nav-item">
          <a 
            href="#contact-section" 
            :class="`nav-link ${activeSection == 'contact' ? 'active' : ''}`"
          >contact</a>
        </li>
      </ul>
    </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: var(--navbar-height);
    padding: 0 8rem;

    z-index: 1;
    top: 0; left: 0;
    position: fixed;

    background: white;
    border-bottom: .5rem solid black;
    box-shadow: 0 0 10px black;


    .logo {
      font-size: 2rem;
      font-weight: 900;
      letter-spacing: .5rem;
      text-transform: uppercase;

      .dot { position: absolute; color: var(--accent);  }
    }

    .nav-list { height: 100%; display: flex; }

    .nav-item {
      padding: 0 4rem;
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

      &:last-child { padding-right: 0; }
      .active, &:hover > .nav-link { color: var(--accent); }
    }
  }
</style>
