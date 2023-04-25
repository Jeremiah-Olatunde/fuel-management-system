<script lang="ts">

  import { scroll } from "motion";

  import Navbar from "@/components/Navbar.vue";
  import Home from "@/components/home/Home.vue";
  import Services from "@/components/services/Services.vue";
  import Contact from "@/components/contact/Contact.vue";
  import Footer from "@/components/footer/Footer.vue";
  import Projects from "@/components/projects/Projects.vue";
  import Chevron from "@/components/pages/Chevron.vue";
  import Gallery1 from "@/components/pages/Gallery1.vue";
  import Gallery2 from "@/components/pages/Gallery2.vue";
  import Gallery3 from "@/components/pages/Gallery3.vue";
  import Gallery4 from "@/components/pages/Gallery4.vue";
  import Oilfield from "@/components/pages/Oilfield.vue";
  import Construction from "@/components/pages/Construction.vue";
  import Procurement from "@/components/pages/Procurement.vue";

  import Test from "./Test.vue";



  export default {
    data: function(){ return { page: "home", activeSection: "home" } },
    components: { 
      Navbar, 
      Home, 
      Services, 
      Projects,
      Contact, 
      Chevron, 
      Gallery1,
      Gallery2,
      Gallery3,
      Gallery4,
      Oilfield,
      Construction,
      Procurement,
      Footer,
      Test
    },

    mounted: function(){
      let container = document.querySelector(".app-container");
      if(!(container instanceof HTMLElement)) throw new Error("CONTAINER RETRIEVAL ERROR");
      const observer = new MutationObserver(() => {
        let elem = document.querySelector(".navbar") as HTMLElement;
        if (document.contains(elem)) {
          //--- INITIALIZE NAVBAR TRACKING -----------------------------------------
          for(const section of document.querySelectorAll('[id$=section]')){
            scroll(
              ({y: { progress: p }}) => {
              if(0 < p && p < 1) {
                this.activeSection = section.getAttribute("id")!.split("-")[0];
              }
            },
            { target: section, offset: ["start center", "end center"] },
            );
          }
        }
        //-----------------------------------------------------------------------
      });

      observer.observe(container, {
        attributeFilter: ["class"],
        attributeOldValue: true,
        subtree: true,
      });
    }
  }
</script>

<template>
  <main class="app-container">
    <template  v-if="page == 'home'">
      <!-- DESKTOP -->
      <Navbar :active-section="activeSection"/>
      <Home @open="(pageName) => page = pageName"/>
      <Services/>
      <Projects @open="(pageName) => page = pageName"/>
      <Contact/>
      <Footer/>
    </template>

    <Chevron 
      v-if="page == 'chevron'" 
      @close="page = 'home'" 
      @open="(pageName) => page = pageName"
    />

    <Oilfield 
      v-if="page == 'oilfield'" 
      @close="page = 'home'" 
      @open="(pageName) => page = pageName"
    />

    <Construction 
      v-if="page == 'construction'" 
      @close="page = 'home'" 
      @open="(pageName) => page = pageName"
    />

    <Procurement 
      v-if="page == 'procurement'" 
      @close="page = 'home'" 
      @open="(pageName) => page = pageName"
    />

    <Gallery1 
      v-if="page == 'gallery1'"
      @close="page = 'chevron'" 
    ></Gallery1>

    <Gallery2 
      v-if="page == 'gallery2'"
      @close="page = 'oilfield'" 
    ></Gallery2>
    
    <Gallery3 
      v-if="page == 'gallery3'"
      @close="page = 'construction'" 
    ></Gallery3>

    <Gallery4 
      v-if="page == 'gallery4'"
      @close="page = 'procurement'" 
    ></Gallery4>

  </main>
</template>

<style lang="scss">
  .app-container {
    --navbar-height: 8rem;
  }

</style>
