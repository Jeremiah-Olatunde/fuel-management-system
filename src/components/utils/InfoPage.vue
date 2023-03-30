<script lang="ts">
  import XIcon from "@/components/icons/XIcon.vue";

  export default {
    components: { XIcon },
    emits: ["close"]
  }
</script>

<template>
  <section class="info-page">
    <slot name="info-media"></slot>

    <div class="info-content">
      <div style="text-align: right;">
        <button class="close-button" @click="$emit('close')">
          <XIcon class="icon"/>
        </button>
      </div>

      <ul class="data-list">
        <li class="data-item">
          <div class="icon"><slot name="data-icon-0"></slot></div>
          <div class="dash">&mdash;&mdash;</div>
          <div class="label"><slot name="data-label-0"></slot></div>
        </li>

        <li class="data-item">
          <div class="icon"><slot name="data-icon-1"></slot></div>
          <div class="dash">&mdash;&mdash;</div>
          <div class="label"><slot name="data-label-1"></slot></div>
        </li>

        <li class="data-item">
          <div class="icon"><slot name="data-icon-2"></slot></div>
          <div class="dash">&mdash;&mdash;</div>
          <div class="label"><slot name="data-label-2"></slot></div>
        </li>
      </ul>

      <header class="info-header">
        <h2 class="main-header"><slot name="main-header"></slot></h2>
        <h3 class="sub-header"><slot name="sub-header"></slot></h3>
      </header>

      <p class="info-text text"><slot name="text"></slot></p>

      <div style="text-align: right;">
        <button class="more-button">
          <span class="dash">&mdash;&mdash;</span>
          <slot name="more-button"></slot>
        </button>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  .info-page {
    font-size: 1.15rem; // 1280 x 720 = 1rem;

    padding: 7em;
    background: white;

    width: 100vw;
    height: 100vh;

    z-index: 2;
    top: 0; left: 0;
    position: absolute;

    display: grid;
    grid-column-gap: 7em;
    grid-template-columns: 4.5fr 5.5fr;

    .close-button .icon { width: 2.5em; height: 2.5em; }

    .more-button {
      font-size: 2em;
      font-weight: 800;
      font-variant: small-caps;   

      padding-top: 2em;
      letter-spacing: .1em;

      .dash { letter-spacing: 0; margin-right: 1em; }
    }

    .info-header {
      padding: 5em 0 1em 0;
      .main-header { font-size: 5em; } 
      .sub-header { font-size: 2em; }
    }

    .info-text { font-size: 1.5em; }

    .data-list {
      .data-item {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: repeat(3, min-content);
        
        margin-bottom: 1em;
        align-items: center;
      }

      .dash { letter-spacing: 0; color: var(--accent-light); }      

      .icon:deep(svg){
        height: 1.5em;
        aspect-ratio: 1;
        fill: var(--accent-light);
      }

      .label {
        font-weight: 600;
        font-size: 1.5em;
        font-variant: small-caps; 

        white-space: nowrap;   
        letter-spacing: .2em;
        color: rgba(0, 0, 0, .5);
      }
    }
  }
</style>