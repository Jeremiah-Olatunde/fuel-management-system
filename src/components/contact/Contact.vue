<script lang="ts">
  import ContactTitle from "@/components/contact/ContactTitle.vue";
  import ContactForm from "@/components/contact/ContactForm.vue";

  export default {
    components: { ContactTitle, ContactForm }
  }
</script>


<template>
    <section class="contact-section section" id="contact-section">
      <ContactTitle></ContactTitle>
      <ContactForm></ContactForm>
    </section>
</template>

<style lang="scss" scoped>

  .contact-section {
    font-size: 1rem;
    display: grid;
  }

  @media screen and (min-width: 700px) {
    .contact-section {
      grid-template-columns: .6fr .4fr;
    }
  }

  @media screen and (min-width: 1400px) {
    .contact-section { font-size: 1.15rem; }
  }
  
  @media screen and (min-width: 1700px) {
    .contact-section { font-size: 1.35rem; }
  }
</style>