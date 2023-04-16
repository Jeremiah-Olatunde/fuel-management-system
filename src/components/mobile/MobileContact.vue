<template>
  <section class="section mobile-contact dotted-bg">
    <form action="" class="form">
      <header class="form-header section-header">
        <div class="main-header">contact</div>
      </header>
      <input type="text" class="form-input text" name="user_name" placeholder="NAME"/>
      <input type="text" class="form-input text" name="user_email" placeholder="EMAIL"/>
      <textarea class="form-input message text" name="message" placeholder="YOUR MESSAGE HERE"></textarea>
      <input type="submit" class="submit-button button-border" value="submit!"/>
    </form>  
  </section>
</template>

<style lang="scss" scoped>
  .mobile-contact {
    display: grid;
    place-items: center;
    z-index: -1;

    .form {
      padding: 2em;
      width: min-content;

      background: white;
      border: .5rem solid black;
      box-shadow: 
      rgba(0, 0, 0, 0.3) 0 1.9em 3.8em, 
      rgba(0, 0, 0, 0.22) 0 1.5em 1.2em;

      box-shadow: 
        2px 2px 0  darkgoldenrod, 
        6px 6px 0 black,
        10px 10px 10px black
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