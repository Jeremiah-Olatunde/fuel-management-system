<script lang="ts">
  import Gallery from "@/components/utils/Gallery.vue";

  export default {
    components: {
      Gallery,
    }
  }
</script>

<template>
  <Gallery>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(2).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(3).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(4).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(5).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(6).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(7).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(8).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(9).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(10).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(11).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(12).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(13).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(14).jpg" alt=""
          class="image"
        >
    </div>
    <div class="project-card">
      <img 
          src="@/assets/images/chevron/(15).jpg" alt=""
          class="image"
        >
    </div>

    
    <template #data-head-0>take</template>
    <template #data-head-1>a look</template>
    <template #sub-head-0>have a night you will never forget</template>
    <template #close-icon>close gallery</template>
  </Gallery>
</template>

<style lang="scss" scope>

  .project-card {

      .image {
        filter: brightness(60%);
        position: absolute;
        transition: all 0.2s ease;    
      }

      &:hover .image {
        filter: brightness(100%);
        width: 120%; height: 120%;
      }
    }
</style>