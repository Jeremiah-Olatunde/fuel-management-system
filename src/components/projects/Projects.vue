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
    display: grid;
    grid-template-columns: min-content auto;
    height: 100vh;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1400px) {
    .projects-section { font-size: 1.15rem; }
  }
  
  @media screen and (min-width: 1700px) {
    .projects-section { font-size: 1.35rem; }
  }
</style>