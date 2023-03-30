<script lang="ts">

  import { scroll } from "motion";

  import Navbar from "@/components/Navbar.vue";
  import Hero from "@/components/hero/Hero.vue";
  import Services from "@/components/services/Services.vue";
  import Contact from "@/components/contact/Contact.vue";
  import Projects from "@/components/projects/Projects.vue";
  import Chevron from "@/components/pages/Chevron.vue";
  import Gallery from "@/components/pages/Gallery.vue";

  export default {
    data: function(){ return { page: "home", activeSection: "hero" } },
    components: { Hero, Navbar, Services, Projects, Contact, Chevron, Gallery  },
    mounted: function(){
      //--- INITIALIZE NABAR TRACKING -----------------------------------------
      for(const section of document.querySelectorAll('[id$=section]')){
        scroll(
          ({y: { progress: p }}) => {
            if(0 < p && p < 1)
              this.activeSection = section.getAttribute("id")!.split("-")[0];
          },
          { target: section, offset: ["start center", "end center"] },
        );
      }
      //-----------------------------------------------------------------------
    }
  }
</script>

<template>
  <main class="app-container">
    <template v-if="page == 'home'">
      <Navbar :active-section="activeSection"/>
      <Hero @open="(pageName) => page = pageName"/>
      <Services/>
      <Projects/>
      <Contact/>
    </template>

    <Chevron @close="page = 'home'" v-if="page == 'chevron'" @open="(pageName) => page = pageName"/>
    <Gallery @close="page = 'chevron'" v-if="page == 'gallery'"></Gallery>
  </main>
</template>

<style lang="scss">
  .app-container {
    --navbar-height: 8rem;
  }
</style>
