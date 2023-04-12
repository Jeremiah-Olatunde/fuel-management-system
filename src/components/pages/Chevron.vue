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
    <template #data-label-0>february 25, 2023</template>  

    <template #data-icon-1><MagnifyIcon/></template>
    <template #data-label-1>namor home and apartment rentals</template>  

    <template #data-icon-2><LocationIcon/></template>
    <template #data-label-2>house 30, chevron alternative route, <br>off chevron drive lekki, lagos</template>  

    <template #main-header>Namor <br> home and apartments</template> 
    <template #sub-header>top quality home and apartments</template> 
    <template #text>
      Namor home and apartments is a highly sophisticated, state-of-the-art home and apartment situated at Chevron alternative route in Lekki, Lagos.
      Its modern facilities, 24/7 power supply, high security and serene environment make your stay very convenient. 
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