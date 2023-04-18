<script lang="ts">
  import { defineComponent } from 'vue';
  import emailjs from "@emailjs/browser";

  export default defineComponent({
    methods: {
      sendEmail() {
        emailjs.sendForm('contact_service', 'contact_form_namor', this.$refs.form as HTMLFormElement, 'AZZHVmu8BUnFltQfO')
          .then(
            () => alert('Success! Your message has been received by Namor Technologies'), 
            () => alert('FAILED...')
          )
      }
    }
  })
</script>

<template>
  <div class="contact-form dotted-bg">
    <form ref="form" @submit.prevent="sendEmail" action="" class="form">
      <header class="form-header section-header">
        <h2 class="main-header">contact</h2>
      </header>
      <input type="text" class="form-input text" name="user_name" placeholder="NAME"/>
      <input type="text" class="form-input text" name="user_email" placeholder="EMAIL"/>
      <textarea class="form-input message text" name="message" placeholder="YOUR MESSAGE HERE"></textarea>
      <input type="submit" class="submit-button button-border" value="submit!"/>
    </form>  
  </div>
</template>


<style lang="scss" scoped>
  .contact-form {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    .form {
      padding: 2em;
      width: min-content;
      background: white;
      border: .5rem solid black;
      box-shadow: 
        2px 2px 0  darkgoldenrod, 
        5px 5px 0 black,
        3px 3px 10px black
      ;

      .main-header { 
        font-size: 5em; 
        text-align: center;
        padding: 0 .4em .4em;
      }

      .form-input {
        width: 100%;
        height: 2.666em;
        font-size: 1.5em;
        margin-bottom: 2.666em;
        border-bottom: .1rem solid rgba(0, 0, 0, .5);
        &:focus {
          color: var(--accent);
          border-bottom: .1rem solid var(--accent);
        }
      }
      .message { height:  5.333em; }
      .submit-button { 
        width: 100%; 
        font-size: 2em; 
        padding: 1.75rem 0;
      }
    }
  }
</style>
