<template>
  <main class="relative">
    <h1 class="heading w-fit relative text-black z-10">My Projects</h1>

    <!-- <div class="absolute top-[1.25rem] right-[1.25rem] z-0 opacity-10">
        <div class="flex flex-1 gap-3 h-[150px] w-[200px]">
          <div class="flex-1 gap-2 flex flex-col">
            <div class="image bg-black"></div>
            <div class="image2 bg-slate-400"></div>
          </div>
          <div class="flex-[2] bg-red-200">
            <div class="image3"></div>
          </div>
        </div>
    </div> -->

    <div class="w-full" v-if="projects">
      <ProjectCardComp
      v-for="project of projects"
      :key="project.id"
      :project="project"
      />

    </div>
    <div v-else>
      loading...
    </div>

    <h1 class="headingAlt">
      Testimonials
    </h1>

    <div v-if="testimonials">
      <TestimonialCardComp
      v-for="testimonial of testimonials"
      :key="testimonial.id"
      :testimonial="testimonial"
      />
    </div>
    <div v-else>
      Loading...
    </div>
  </main>
</template>

<script>

    import ProjectCardComp from '@/components/ProjectCardComp.vue';
    import TestimonialCardComp from '@/components/TestimonialCardComp.vue';

    export default{
        components: {
    ProjectCardComp,
    TestimonialCardComp
  },
  computed: {
    projects(){
      return this.$store.state.projects
    }, testimonials(){
      return this.$store.state.testimonials
    }
  },
  mounted(){
    this.$store.dispatch("fetchProjects"),
    this.$store.dispatch("fetchTestimonials")
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
