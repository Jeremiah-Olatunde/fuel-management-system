<script lang="ts">
  import InstagramIcon from "@/components/icons/InstagramIcon.vue";
  import EmailIcon from "@/components/icons/EmailIcon.vue";
  import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";

  export default {
    components: {
      InstagramIcon,
      EmailIcon,
      LinkedInIcon,
    }
  }
</script>

<template>
  <div class="about-title">
    <header class="section-header about-header">
      <h1 class="main-header">About us</h1>
      <h2 class="sub-header">who we are</h2>
    </header>

    <p class="about-text text">
      Namor Technologies Limited is a private company, founded 
      by Engr. Frederick Roman on March 23, 2010, in Nigeria.
      <span class="about-text-lg">The company is led by a team of
        dedicated professionals with more than 34 years of combined
        industry experience mainly in Capital Construction, Engineering 
        (Civil, Electrical/Instrumentation and Mechanical), Procurement,
        Equipment rental, Manpower supply, Real Estate, Ancillary services 
        and Oilfield services. We have access to global sources of products
        and services through multiple alliance agreements, exclusive partnerships
        and Joint ventures.
      </span> 
    </p>

    <div class="about-contact">
      <a href="tel:+2348034056935">
        <button class="book-button">Book a Call!</button>
      </a>
      <span class="demarcation"></span>
      <div class="icon-container">
        <span class="socials-icon">
          <a href="tel:+2348034056935">
            <InstagramIcon class="icon"/>
          </a>
        </span>

        <span class="socials-icon">
          <a href="tel:+2348034056935">
            <EmailIcon class="icon"/>
          </a>
        </span>

        <span class="socials-icon">
          <a href="tel:+2348034056935">
            <LinkedInIcon class="icon"/>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about-title {
    padding: 0 2em;
    margin-bottom: 2em;
    .about-header {
      .main-header { font-size: 4em; }
      .sub-header { font-size: 2.5em; }
    }

    .about-text { 
      font-size: 1.5em; 
      .about-text-lg {
        display: none;
      }
    }

    .about-contact {
      display: none;
    }
  }

  @media screen and (min-width: 800px) {
    .about-title {
      padding: 0 3em;
      .about-text {
        .about-text-lg { display: inline-block; }
      }

      .about-contact {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10em;

        .book-button { 
          font-size: 1.6em; 
          font-weight: 500;
          text-transform: uppercase; 
          border: 0.1em solid var(--accent-light);
          padding: 0.8em 2em;

          &:hover {
            background-color: var(--accent-light);
          }
        }

        .demarcation { width: 0.2em; height: 7em; background-color: var(--accent-light); }
        .socials-icon {
          padding: 0.6em;
          margin: 0.5em;
          border: 0.2em solid var(--accent-light);
          border-radius: 50%;
          position: relative;
          top: 0;
          transition: top 0.3s ease-out;

          &:hover {
            top: -0.5em;
            .icon { fill: darkgoldenrod; }
          }
          .icon {
            height: 2.5em;
            aspect-ratio: 1;
            fill: var(--accent-light);
          }
        }
      }
    }
  }
</style>