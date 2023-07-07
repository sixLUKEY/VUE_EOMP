<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>

import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue';
 
 export default {
    components : {
      NavbarComp,
      FooterComp
    }
 }

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

:root{
  --primary-color: #BF0101;
  --secondary-color: #7C7A7A;
  --black: #080708;
  --white: #EFE1E1;
}

html{
  overflow-x: hidden;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Bebas Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EFE1E1;
}

::-webkit-scrollbar {
     display: none;
}

main{
  padding-inline: 1.25rem;
  margin-bottom: 1.25rem;
}

.heading, .headingAlt{
  width: fit-content;
    font-size: 4rem;
    padding-inline-start: 0.5rem;
    position: relative;
    color: var(--black);
  }
  .heading::after{
    content: '';
    position: absolute;
    width: 110%;
    height: 10px;
    bottom: 10%;
    left: 0;
    background-color: var(--primary-color);
    border-radius: 0 999px 999px 0;
  }

  .headingAlt{
    margin-inline: auto 0;
    padding-inline-end: 0.5rem;
  }

  .headingAlt::after{
    content: '';
    position: absolute;
    width: 110%;
    height: 10px;
    bottom: 10%;
    background-color: var(--primary-color);
    right: 0;
    border-radius: 999px 0 0 999px;
  }

  @media screen and (max-width: 600px) {
    .heading, .headingAlt{
      font-size: 3rem;
    }
  }
</style>
