<script lang="ts">

  import { scroll } from "motion";

  import Navbar from "@/components/Navbar.vue";
  import Hero from "@/components/hero/Hero.vue";
  import Services from "@/components/services/Services.vue";
  import Contact from "@/components/contact/Contact.vue";
  import Projects from "@/components/projects/Projects.vue";
  import Chevron from "@/components/pages/Chevron.vue";
  import Gallery from "@/components/pages/Gallery.vue";

  import MobileNavbar from "@/components/mobile/MobileNavbar.vue";
  import MobileHero from "@/components/mobile/MobileHero.vue";
  import MobileServices from "@/components/mobile/MobileServices.vue";
  import MobileProjects from "@/components/mobile/MobileProjects.vue";
  import MobileContact from "@/components/mobile/MobileContact.vue";

  import Draft from  "@/components/Draft.vue";

  export default {
    data: function(){ return { page: "home", activeSection: "hero" } },
    components: { 
      Hero, Navbar, Services, Projects,
      Contact, Chevron, Gallery,

      MobileNavbar, MobileHero, MobileServices, MobileProjects, MobileContact,

      Draft
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
      <Hero @open="(pageName) => page = pageName"/>
      <!-- <Services/> -->
      <!-- <Projects/> -->
      <!-- <Contact/> -->

      <!-- MOBILE -->
      <!-- <MobileNavbar :active-section="activeSection"></MobileNavbar> -->
      <!-- <MobileHero id="hero-section"></MobileHero> -->
      <MobileServices id="services-section"></MobileServices>
      <MobileProjects id="projects-section"></MobileProjects>
      <MobileContact id="contact-section"></MobileContact>
    </template>


    <Chevron @close="page = 'home'" v-if="page == 'chevron'" @open="(pageName) => page = pageName"/>
    <Gallery @close="page = 'chevron'" v-if="page == 'gallery'"></Gallery>
  </main>
</template>

<style lang="scss">
  .app-container {
    --navbar-height: 8rem;
    height: 100vh;

    .test {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      aspect-ratio: 1;
      // background: darksalmon;
      border-radius: 30%;

      display: grid;
      place-items: center;

      .wrapper {
        padding: 2rem;
      }

      .main-header { font-size: 5rem; }
      .sub-header { font-size: 1.75rem;}

    }
  }

</style>
