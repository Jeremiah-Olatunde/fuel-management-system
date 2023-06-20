<script lang="ts">
  import { defineComponent } from 'vue';
  const USERNAME = "admin";
  const PASSWORD = "12345";

  export default defineComponent({
    emits: ['open'],
    mounted: function(){
      const username = this.$refs.username as HTMLInputElement;
      const password = this.$refs.password as HTMLInputElement;
      const submit = this.$refs.submit as HTMLInputElement;

      submit.addEventListener("click", (event) => {
        if(username.value !== USERNAME && password.value !== PASSWORD) 
          alert("USERNAME OR PASSWORD IS INVALID");
        else
          this.$emit("open", "dashboard");

        event.preventDefault();
      });
    }
  })
</script>

<template>
  <div class="signin-form dotted-bg">
    <form ref="form" action="" class="form" refs="form">
      <header class="form-header section-header">
        <h2 class="main-header">sign in</h2>
      </header>
      <input type="text" class="form-input text" placeholder="USERNAME" ref="username"/>
      <input type="password" class="form-input text"  placeholder="PASSWORD" ref="password"/>
      <input type="submit" class="submit-button button-border" value="submit!" ref="submit"/>
    </form>  
  </div>
</template>


<style lang="scss" scoped>
  .signin-form {
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
        white-space: nowrap;
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
