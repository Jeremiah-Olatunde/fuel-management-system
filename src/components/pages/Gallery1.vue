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
    <div class="project-card" v-for="n in 14">
        <img 
          :src="`/src/assets/images/chevron/(${n+1}).jpg`" alt=""
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