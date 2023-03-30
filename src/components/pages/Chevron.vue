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
      <div class="chevron-card card" @click="$emit('open', 'gallery')">
        <img class="image" src="@/assets/images/cozy.jpg" alt="">
        <div class="open-gallery">
          <ImageIcon class="icon"/>
          <div class="label main-header">gallery</div>
        </div>
      </div>
    </template>

    <template #data-icon-0><CalendarIcon/></template>
    <template #data-label-0>july 27 2001</template>  

    <template #data-icon-1><MagnifyIcon/></template>
    <template #data-label-1>namor tech rentals</template>  

    <template #data-icon-2><LocationIcon/></template>
    <template #data-label-2>chevron drive lekki, lagos</template>  

    <template #main-header>chevron <br> hotel and inn</template> 
    <template #sub-header>Lorem, ipsum dolor sit amet, consectetur.</template> 
    <template #text>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eius saepe, explicabo libero modi necessitatibus, magni et enim odit esse, ad quod nihil odio id! Temporibus laborum qui atque, vel? Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Nihil incidunt voluptates modi doloribus eum.
    </template>

    <template #more-button>book a stay now!</template>

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