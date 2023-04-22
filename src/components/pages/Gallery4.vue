<script lang="ts">
  import Gallery from "@/components/utils/Gallery.vue";
  import CalendarIcon from "@/components/icons/CalendarIcon.vue";
  import LocationIcon from "@/components/icons/LocationIcon.vue";
  import InfoIcon from "@/components/icons/InfoIcon.vue";

  export default {
    components: {
      Gallery,
      CalendarIcon,
      LocationIcon,
      InfoIcon,
    }
  }
</script>

<template>
  <Gallery>
    <div class="project-card">
      <figure>
        <img 
          src="@/assets/images/procurement/(1).jpeg" alt=""
          class="image"
        >
        <figcaption class="image-desc">
          <ul>
            <li><CalendarIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">March, 2019.</span></li>
            <li><LocationIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Delta state.</span></li>
            <li><InfoIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Procurement of valves for OML 147 Flowline project.</span></li>
          </ul>
        </figcaption>
      </figure>
    </div>

    <template #data-head-0>Have</template>
    <template #data-head-1>a look</template>
    <template #sub-head-0>Our Procurement projects</template>
    <template #close-icon>close gallery</template>
  </Gallery>
</template>

<style lang="scss" scope>
  // .project-card {
  //     width: 100%;
  //     aspect-ratio: 1 / 1.5;
  //     margin: 1.5em 0 ;
  //     overflow: hidden;
  //     box-shadow: 0 0 2rem;

  //     .image {
  //       filter: brightness(60%);
  //       position: absolute;
  //       top: 50%; left: 50%;
  //       transform: translate(-50%, -50%);  
  //       transition: all 0.2s ease;    
  //     }

  //     &:hover .image {
  //       filter: brightness(100%);
  //       width: 120%; height: 120%;
  //     }
  //   }

  
  // @media screen and (min-width: 700px) {
  //   .project-card {
  //       margin: 1em;
  //       width: 30%;
  //       min-width: 100px;
  //     }    
  // }
</style>