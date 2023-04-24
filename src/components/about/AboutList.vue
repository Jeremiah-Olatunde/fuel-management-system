<script lang="ts">
  import ArcheryIcon from "@/components/icons/ArcheryIcon.vue";
  import TelescopeIcon from "@/components/icons/Telescope.vue";
  import KnightIcon from "@/components/icons/KnightIcon.vue";

  export default {
    components: {
      ArcheryIcon,
      TelescopeIcon,
      KnightIcon,
    }
  }
</script>

<template>
  <div class="about-list-container">
    <ul class="about-list">
      <li class="item item-one">
        <TelescopeIcon class="icon"/>
        <div class="content">
          <h2 class="header">Vision</h2>
          <p class="text">
            To become the leading source of total
            solution provider in the field of Engineering 
            and Construction, Real Estate services, Oilfield services, 
            Procurement and Manpower supply.
          </p>
        </div>
      </li>

      <li class="item item-two">
        <ArcheryIcon class="icon"/>
        <div class="content">
          <h2 class="header">Mission</h2>
          <p class="text">
            Namor Technologies Limited is committed to increasing
            value-added content for all our stakeholders, partners,
            clients, contractors, employees and company through the
            transfer of skills and technology.
          </p>
        </div>
      </li>
      
      <li class="item item-three">
        <KnightIcon class="icon"/>
        <div class="content">
          <h2 class="header">Strategy</h2>
          <p class="text">
            The company has developed an operating philosophy to best meet
            the requirements of clients in business. The guiding principles 
            behind this philosophy are: Technology, Quality, Flexibility and 
            Sustainability.
          </p>
        </div>
      </li>

    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .about-list-container {
    padding: 0 2em;
    .about-list {
      display: grid;
      row-gap: 2em;

      .item {
        display: grid;
        place-items: flex-start;
        column-gap: 1.5em;
        grid-template-areas: "icon" 
                              "content";

        .icon {
          margin-top: 1em;
          height: 3.5em;
          aspect-ratio: 1;
          fill: var(--accent-light); 
        }

        .content {
          .header { 
            margin: 1em 0;
            font-size: 2em; 
            font-weight: 700;
            color: var(--accent-light);
          } 
          
          .text {
            font-size: 1.3em;
          }
        }
      }
    }
  }
</style>