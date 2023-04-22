<script lang="ts">
  import InstagramIcon from "@/components/icons/InstagramIcon.vue";
  import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
  import PhoneIcon from "@/components/icons/PhoneIcon.vue";
  import EmailIcon from "@/components/icons/EmailIcon.vue";

  export default {
    components: {
      InstagramIcon,
      LinkedInIcon,
      PhoneIcon,
      EmailIcon,
    }
  }
</script>

<template>
  <div class="footer-section-1">
    <div class="footer-socials">
      <span class="socials-icon">
        <a><InstagramIcon class="icon"/></a>
      </span>
      <span class="socials-icon">
        <a target="_blank" 
          href="https://ng.linkedin.com/in/frederick-roman-65052122">
          <LinkedInIcon class="icon"/>
        </a>
      </span>

      <span class="socials-icon">
        <a href="tel:+2348034056935">
          <PhoneIcon class="icon"/>
        </a>
      </span>

      <span class="socials-icon">
        <a target="_blank" 
            href="mailto:namortech@yahoo.com">
            <EmailIcon class="icon"/>
        </a>
      </span>
    </div>

    <div class="footer-header">
      <h2>Let's Talk?</h2>
    </div>

    <div class="footer-button">
      <a class="button"
          target="_blank" 
          href="mailto:namortech@yahoo.com">
          Make an enquiry!
      </a>
    </div>
  </div>

  <div class="footer-section-2">
    <a href="tel:+2348034056935" class="link-one">
      <div class="infobox">
        <h3 class="title">Lekki Phase II.</h3>
        <p>+2348034056935</p>
      </div>
    </a>

    <a href="tel:+2348034056935" class="link-two">
      <div class="infobox">
        <h3 class="title">Port-Harcourt</h3>
        <p>+2348052763144</p>
      </div>
    </a>
  </div>

  <div class="footer-section-3">
    <p class="footer-title">2023© Namor Technologies, All rights reserved.</p>
    <ul class="footer-menu">
      <li>Terms of Use</li>
      <li>Privacy Policy</li>
      <li>Cookie Policy</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .footer-section-1 {
    background-color: #1b1b1b;
    display: grid;
    // justify-content: space-around;
    padding: 9em 3em;
    place-items: center;
    position: relative;
    grid-template-areas: "socials"
                          "main-header"
                          "enquiry";

    .footer-header {
      h2 {
        margin: 25px 0;
        font-size: 4em;
        color: rgba(255, 255, 255);
        font-weight: 600;
      }
    }

    .footer-socials {
      grid-area: socials;
      .socials-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 5em; height: 5em;
        margin: 0.5em;
        border: 0.2em solid darkgoldenrod;
        border-radius: 50%;
        position: relative;
        top: 0;
        transition: top 0.3s ease-out;

        &:hover {
          top: -0.5em;
          .icon { fill: darkgoldenrod; }
        }
      }
      .icon {
        height: 2.5em;
        aspect-ratio: 1;
        fill: #fff
      }
    }

    .footer-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 15em;
      height: 5em;
      border: 2px solid darkgoldenrod;
      background: linear-gradient(to left, #1b1b1b 50%, darkgoldenrod 50%) right;
      background-size: 200% 100%;
      transition: all 0.3s ease-out;

      &:hover {
        background-position: left;
        a {color: #fff;}
      }
    }

    .footer-header {
      grid-area: main-header;
    }

    .footer-button {
      grid-area: enquiry;
    }
  }

  .footer-section-2 {
    background-color: #161616;
    display: grid;
    place-items: center;
    padding: 1em 0;
    font-size: 1.5em;
    color: #fff;
    grid-template-areas: "number-one"
                          "number-two";

    a {
      margin: 0.4em 0;
      .title {
        margin: 0.6em;
      }
    }

    .link-one {
      grid-area: number-one;
    }

    .link-two {
      grid-area: number-two;
    }
  }

  .footer-section-3 {
    background-color: #000000;
    display: grid;
    // justify-content: space-around;
    place-items: center;
    padding: 2.2em;
    font-size: 1.3em;
    color: #fff;
    grid-template-areas: "row-one"
                          "row-two";
    .footer-title {
      grid-area: row-one;
      margin-bottom: 0.8em;
    }

    .footer-menu {
      grid-area: row-two;
      li {
        margin: 0.3em;
        display: inline-block;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .footer-section-1 {
      grid-template-areas: "socials main-header enquiry";
    }

    .footer-section-2 {
      grid-template-areas: "number-one number-two";
    }

    .footer-section-3 {
      grid-template-areas: "row-one row-two";
    }
  }
</style>