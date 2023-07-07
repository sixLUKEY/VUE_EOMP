<template>
  <nav
    class="w-full h-20 flex justify-between items-center bg-black text-white px-5"
  >
    <button
      class="menu cursor-pointer border-none bg-transparent"
      @click="open()"
    >
      <svg
        width="80"
        height="164"
        viewBox="0 0 170 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 9">
          <g id="Group 7">
            <rect
              id="Rectangle 3"
              x="32"
              y="26"
              width="105"
              height="105"
              fill="#BF0101"
            />
          </g>
          <g id="Group 43">
            <path
              id="Line 1"
              d="M48.486 116.443L122.486 42.4431"
              stroke="black"
              stroke-width="10"
              stroke-linecap="round"
            />
            <path
              id="Polygon 1"
              d="M40.1443 34.1443L110.689 35.157L41.1571 104.689L40.1443 34.1443Z"
              fill="#080708"
            />
            <path
              id="Polygon 2"
              d="M129.849 123.849L59.3046 122.837L128.837 53.3046L129.849 123.849Z"
              fill="#080708"
            />
          </g>
        </g>
      </svg>
    </button>
    <router-link to="/">
      <div class="logo flex gap-3 justify-center items-end font-bold">
          <img src="https://i.postimg.cc/sXBvn7Q7/luke-Untitled-1-1.png" alt="lukeyLogo" class="h-[50px] rounded-full">
          sixLUKEY
      </div>
    </router-link>
  </nav>

  <div class="menu">
    <MenuComp />
  </div>
</template>

<script>
import MenuComp from "./MenuComp.vue";

export default {
  components: {
    MenuComp,
  },
  methods: {
    open() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("close");
    },
  },
};
</script>

<style scoped>

rect{
    transition: 0.2s;
}

svg:hover rect{
    fill: rgb(255, 255, 255);
}

.logo{
    font-size: 2rem;
}

a{
  text-decoration: none;
  color: var(--white);
}

</style>
