<script lang="ts">
  import InfoPage from "@/components/utils/InfoPage.vue";
  
  import ImageIcon from "@/components/icons/ImageIcon.vue";
  import CalendarIcon from "@/components/icons/CalendarIcon.vue";
  import LocationIcon from "@/components//icons/LocationIcon.vue";
  import MagnifyIcon from "@/components//icons/MagnifyIcon.vue";

  export default {
    components: { 
      InfoPage, ImageIcon, CalendarIcon,
      MagnifyIcon, LocationIcon, 
    }
  }
</script>

<template>
  <InfoPage>
    <template #info-media>
      <div class="chevron-card card" @click="$emit('open', 'gallery3')">
        <img class="image" src="@/assets/images/construction.jpg" alt="">
        <div class="open-gallery">
          <ImageIcon class="icon"/>
          <div class="label main-header">gallery</div>
        </div>
      </div>
    </template>

    <template #data-icon-0><CalendarIcon/></template>
    <template #data-label-0>Since 2010</template>  

    <template #data-icon-1><MagnifyIcon/></template>
    <template #data-label-1>Capital construction</template>  

    <template #data-icon-2><LocationIcon/></template>
    <template #data-label-2>delta state</template>  

    <template #main-header>Namor <br> capital construction</template> 
    <template #sub-header>quality construction services</template> 
    <template #text>
      Capital construction is one of the various services offered at Namor Technologies. 
      Since its establishment in 2010, we have worked on a lot of capital construction
      projects, particularly in Delta state. Construction projects at Namor technologies
      usually involve generating engineering designs/specifications, implementation of these
      designs and lastly, ensuring that they meet regulatory requirements.
    </template>

    <!-- <template #more-button>book a stay now!</template> -->

  </InfoPage>
</template>

<style lang="scss" scoped>

  .chevron-card {
    .open-gallery {
      cursor: pointer;
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);

      display: grid;
      grid-row-gap: 1em;
      place-items: center;

      .icon {
        height: 4em;
        aspect-ratio: 1;
        fill: var(--accent-light); 
      }

      .label {
        font-size: 2em;
        color: white;
        text-align: center;
        transition: color .25s ease;
      }

      &:hover .label { color: var(--accent-light); }
    }
  }

</style>