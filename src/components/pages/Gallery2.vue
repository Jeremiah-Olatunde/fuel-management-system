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
          src="@/assets/images/oilfield/(6).jpeg" alt=""
          class="image"
        >
        <figcaption class="image-desc">
          <ul>
            <li><CalendarIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">September, 2013.</span></li>
            <li><LocationIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Ute erumu 2 drilling location site, Delta state.</span></li>
            <li><InfoIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Drilling location site preparation.</span></li>
          </ul>
        </figcaption>
      </figure>
    </div>

    <div class="project-card">
      <figure>
        <img 
          src="@/assets/images/oilfield/(2).jpeg" alt=""
          class="image"
        >
        <figcaption class="image-desc">
          <ul>
            <li><CalendarIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">February, 2013.</span></li>
            <li><LocationIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Delta state.</span></li>
            <li><InfoIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Casting of concrete cellar slab and pit for oil well drilling.</span></li>
          </ul>
        </figcaption>
      </figure>
    </div>

    <div class="project-card">
      <figure>
        <img 
          src="@/assets/images/oilfield/(3).jpeg" alt=""
          class="image"
        >
        <figcaption class="image-desc">
          <ul>
            <li><CalendarIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">April, 2015.</span></li>
            <li><LocationIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Delta state</span></li>
            <li><InfoIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Gas export compressor station</span></li>
          </ul>
        </figcaption>
      </figure>
    </div>

    <div class="project-card">
      <figure>
        <img 
          src="@/assets/images/oilfield/(4).jpeg" alt=""
          class="image"
        >
        <figcaption class="image-desc">
          <ul>
            <li><CalendarIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">April, 2015.</span></li>
            <li><LocationIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Delta state</span></li>
            <li><InfoIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Crude storage tanks.</span></li>
          </ul>
        </figcaption>
      </figure>
    </div>

    <div class="project-card">
      <figure>
        <img 
          src="@/assets/images/oilfield/(5).jpeg" alt=""
          class="image"
        >
        <figcaption class="image-desc">
          <ul>
            <li><CalendarIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">October, 2017.</span></li>
            <li><LocationIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Delta state.</span></li>
            <li><InfoIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Construction of campsite septic pits in OML 147.</span></li>
          </ul>
        </figcaption>
      </figure>
    </div>

    <div class="project-card">
      <figure>
        <img 
          src="@/assets/images/oilfield/(1).jpeg" alt=""
          class="image"
        >
        <figcaption class="image-desc">
          <ul>
            <li><CalendarIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">May, 2017</span></li>
            <li><LocationIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Delta state</span></li>
            <li><InfoIcon class="icon"/><span class="dash">&mdash;</span><span class="desc">Stabilization of drilling location site</span></li>
          </ul>
        </figcaption>
      </figure>
    </div>

    <template #data-head-0>namor</template>
    <template #data-head-1>oilfield gallery</template>
    <template #sub-head-0>Gallery of our oilfield services projects</template>
    <template #close-icon>close gallery</template>
  </Gallery>
</template>

<style lang="scss">
  .project-card {
      width: 100%;
      aspect-ratio: 1 / 1.5;
      margin: 1.5em 0 ;
      overflow: hidden;
      box-shadow: 0 0 2rem;

      figure {
        height: 100%;

        .image {
          height: 78%;
          filter: brightness(60%);
          position: relative;  
          transition: all 0.2s ease;    
        }
  
        &:hover .image {
          filter: brightness(100%);
          width: 120%; height: 120%;
        }
      }

      .image-desc {
        padding: 0.5em 0.8em;
        background-color: rgb(239, 239, 239);
        height: 22%;
        font-size: 1.35em;

        li {
          padding: 0.2em 0;
          display: flex;
          align-items: center;

          .icon {
            height: 1.8em;
            aspect-ratio: 1;
            fill: var(--accent-light); 
            vertical-align: middle;
          }

          .desc {
            font-weight: 600;
            margin-left: 0.5em;
          }

          .dash {
            margin-left: 0.5em;
            color: darkgoldenrod;
          }
        }

      }

    }

  
  @media screen and (min-width: 700px) {
    .project-card {
      margin: 1em;
      width: 30%;
      min-width: 100px;
    }    
  }
</style>