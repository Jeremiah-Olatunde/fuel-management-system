<template>
  <div class="navbar" style="grid-area: navbar;">
    <h2 class="logo">
      <span class="namor">enabulele</span>
      <span class="tech">enterprises</span> 
      <span class="dot">.</span>
    </h2>

    <div class="date-n-time">
      09<span class="acc">:</span>15
      <span class="acc">|</span>
      19<span class="acc">.</span>06<span class="acc">.</span>23
    </div>
  </div>
</template>

<style scoped lang="scss">
  .acc { color: rgb(178, 34, 34) }

  .navbar {
    display: flex;
    justify-content: space-between;

    padding-bottom: 3em;
    width: 100%;

    letter-spacing: .25em;
    text-transform: uppercase;

    .logo {
      font-size: 1.5em;
      font-weight: 900;
      .tech { margin-left: 1em; }
      .dot { position: absolute; color: var(--accent);  }
    }   
    
    .date-n-time {
      font-weight: 900;
      font-size: 1.5em;
    }   
  }  
</style>