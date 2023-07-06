<template>
  <main class="relative">
    <h1 class="heading w-fit relative text-black z-10">My Projects</h1>

    <div class="absolute top-[1.25rem] right-[1.25rem] z-0 opacity-50">
        <div class="flex flex-1 gap-3 h-[150px] w-[200px]">
          <div class="flex-1 gap-2 flex flex-col">
            <div class="image bg-black"></div>
            <div class="image2 bg-slate-400"></div>
          </div>
          <div class="flex-[2] bg-red-200">
            <div class="image3"></div>
          </div>
        </div>
    </div>

    <ProjectCardComp/>
    <ProjectCardComp/>
    <ProjectCardComp/>
    <ProjectCardComp/>
    <ProjectCardComp/>
    <ProjectCardComp/>

    <h1 class="headingAlt">
      Testimonials
    </h1>

    <TestimonialCardComp/>
    <TestimonialCardComp/>
    <TestimonialCardComp/>
  </main>
</template>

<script>

    import ProjectCardComp from '@/components/ProjectCardComp.vue';
    import TestimonialCardComp from '@/components/TestimonialCardComp.vue';

    export default{
        components: {
    ProjectCardComp,
    TestimonialCardComp
}
    }
</script>

<style scoped>
.image {
  flex: 2;
}

.image2 {
  flex: 1;
}

.image3 {
  flex: 1;
}


</style>
