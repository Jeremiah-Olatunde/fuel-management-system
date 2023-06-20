<script lang="ts">
  import SignInTitle from "@/components/signin/SignInTitle.vue";
  import SignInForm from "@/components/signin/SignInForm.vue";

  export default {
    components: { SignInTitle, SignInForm }
  }
</script>


<template>
    <section class="signin-section section" id="signin-section">
      <SignInTitle></SignInTitle>
      <SignInForm @open="$emit('open', 'dashboard')"></SignInForm>
    </section>
</template>

<style lang="scss" scoped>

  .signin-section {
    font-size: 1rem;
    display: grid;
  }

  @media screen and (min-width: 700px) {
    .signin-section {
      grid-template-columns: .6fr .4fr;
    }
  }

  @media screen and (min-width: 1400px) {
    .signin-section { font-size: 1.15rem; }
  }
  
  @media screen and (min-width: 1700px) {
    .signin-section { font-size: 1.35rem; }
  }
</style>