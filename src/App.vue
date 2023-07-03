<template>
  <NavbarComp/>
  <router-view/>
</template>

<script>

import NavbarComp from './components/NavbarComp.vue';
 
 export default {
    components : {
      NavbarComp
    }
 }

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

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
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
} */

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
