<template>
  <div class="w-[90%] flex projectCard text-black my-5 gap-5">
    <div class="flex-[2] text-center flex flex-col imageBox overflow-hidden relative p-5 rounded-md bg-black">
      <h2 class="text-white mb-3">
        {{ project.name }}
      </h2>
        <img class="image bg-black flex-1 rounded-md object-contain" :src="project.image" :alt="project.name">      
      <div class="overlay rounded-md flex justify-evenly items-center">
        <a :href="project.github" target="_blank">
          <i class="fa-brands fa-github" style="color: #ffffff;"></i>
        </a>
        <a :href="project.live" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i>
        </a>
      </div>
    </div>
    <div class="flex flex-col flex-1 textBox">
      <div class="flex-1 ">
        <p class="stack text-xl">
          {{ project.stack }}
        </p>
      </div>
      <div class="flex-[6] bg-primary text-white p-2 rounded-md flex justify-center items-center">
        <p class="description">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "project"
  ]
};
</script>

<style scoped>

.imageBox:hover .overlay{
  transform: translateY(0%);
}
.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.44);
  transform: translateY(100%);
  transition: 0.2s;
}
.projectCard{
    z-index: 20;
}

.projectCard:nth-child(odd) {
  margin-inline: auto 0;
}

.projectCard:nth-child(even) > .imageBox {
  order: 2;
}

.projectCard:nth-child(even) > .textBox {
  order: 1;
}

p{
    font-size: 0.9rem;
}

.image{
  max-width: 100%;
  
}

.stack{
  color: var(--black);
  font-weight: bold;
  font-size: 3vw;
}

.description{
  font-size: 3vw;
}

i{
  font-size: 3em;
  cursor: pointer;
}

@media screen and (min-width: 800px) {

  h2{
    font-size: 2vw;
  }
  .stack{
    font-size: 2vw;
  }

  .description{
  font-size: 2rem;
}
}

</style>
