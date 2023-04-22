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
      <div class="chevron-card card" @click="$emit('open', 'gallery4')">
        <img class="image" src="@/assets/images/worker.jpg" alt="">
        <div class="open-gallery">
          <ImageIcon class="icon"/>
          <div class="label main-header">gallery</div>
        </div>
      </div>
    </template>

    <template #data-icon-0><CalendarIcon/></template>
    <template #data-label-0>Since 2010</template>  

    <template #data-icon-1><MagnifyIcon/></template>
    <template #data-label-1>engineering procurement</template>  

    <template #data-icon-2><LocationIcon/></template>
    <template #data-label-2>delta state</template>  

    <template #main-header>Namor <br> Procurement</template> 
    <template #sub-header>Quality Procurement services</template> 
    <template #text>
      The procurement services offered at namor technologies involves the design,
      procurement and construction of a company often in the industrial or infrastructure
      sectors. The procurement aspect usually involves procuring equipment, materials and services
      for the project, often through tendering and negotiation with suppliers. 
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