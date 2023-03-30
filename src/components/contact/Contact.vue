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
    display: grid;
    grid-template-columns: 60% 40%;
  }
</style>