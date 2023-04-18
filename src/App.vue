<script lang="ts">

  import { scroll } from "motion";

  import Navbar from "@/components/Navbar.vue";
  import Home from "@/components/home/Home.vue";
  import Services from "@/components/services/Services.vue";
  import Contact from "@/components/contact/Contact.vue";
  import Projects from "@/components/projects/Projects.vue";
  import Chevron from "@/components/pages/Chevron.vue";
  import Gallery from "@/components/pages/Gallery.vue";



  export default {
    data: function(){ return { page: "home", activeSection: "home" } },
    components: { 
      Navbar, 
      Home, 
      Services, 
      Projects,
      Contact, 
      Chevron, 
      Gallery,
    },
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
      <!-- DESKTOP -->
      <Navbar :active-section="activeSection"/>
      <Home @open="(pageName) => page = pageName"/>
      <Services/>
      <Projects/>
      <Contact/>
    </template>


    <Chevron 
      v-if="page == 'chevron'" 
      @close="page = 'home'" 
      @open="(pageName) => page = pageName"
    />
    <Gallery 
      v-if="page == 'gallery'"
      @close="page = 'chevron'" 
    ></Gallery>
  </main>
</template>

<style lang="scss">
  .app-container {
    --navbar-height: 8rem;
  }

</style>
