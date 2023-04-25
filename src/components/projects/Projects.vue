<script lang="ts">
  import ProjectsTitle from "./ProjectsTitle.vue";
  import ProjectsSlider from "./ProjectsSlider.vue";

  export default {
    components: { ProjectsTitle, ProjectsSlider }
  }
</script>

<template>
    <section class="projects-section section" id="projects-section">
      <ProjectsTitle/>
      <ProjectsSlider @open="(pageName) => $emit('open', pageName)"/>
    </section>
</template>

<style lang="scss" scoped>
  .projects-section {
    height: 100vh;
    overflow: hidden;

    padding: var(--navbar-height) 3em 0;

    display: grid;
    align-content: center;
    grid-row-gap: 3em;

    grid-template-rows: min-content 70% min-content;
    grid-template-areas: "title" "slider" "pagination";
  }

  @media screen and (min-width: 700px) {
    .projects-section {
      padding: var(--navbar-height) 0 0 0;

      display: grid;
      grid-row-gap: 0;
      grid-template-rows: auto min-content;
      grid-template-columns: min-content auto;
      grid-template-areas: "title slider" "title pagination";
    }
  }

  @media screen and (min-width: 1400px) {
    .projects-section { font-size: 1.15rem; }
  }
  
  @media screen and (min-width: 1700px) {
    .projects-section { font-size: 1.35rem; }
  }
</style>