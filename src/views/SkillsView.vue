<template>
  <Main>
    <div class="flex justify-between">
        <h1 class="heading w-fit relative text-black">My Skills</h1>
        <button class="cvButton border-0 bg-primary text-white px-5 py-3 my-auto rounded-sm cursor-pointer font-bold">
            Download CV
        </button>
    </div>
    <div class="rankingBox flex gap-5 mt-5 font-bold text-black overflow-hidden">
      <p>
        Novice <span class="asterisk">*</span>
        <br />
        <p class="description">
          Individuals with limited knowledge and experience who require guidance and supervision to perform tasks in a skill.
        </p>
      </p>
      <p>
        Intermediate <span class="asterisk">*</span>
        <br />
        <p class="description">
          Individuals with moderate proficiency and understanding, capable of independent performance but may occasionally seek assistance or guidance.
        </p>
      </p>
      <p>
        Advanced <span class="asterisk">*</span>
        <br />
        <p class="description">
          Individuals with high expertise and mastery, capable of handling complex tasks independently and providing guidance to others.
        </p>
      </p>
      <p>
        Expert <span class="asterisk">*</span>
        <br />
        <p class="description">
          Individuals with exceptional knowledge, experience, and authority in a skill, often contributing to its advancement and innovation.
        </p>
      </p>
      <p>
        Master <span class="asterisk">*</span>
        <br />
        <p class="description">
          Individuals at the pinnacle of achievement, possessing unparalleled expertise, experience, and recognized as leaders and innovators in their field.
        </p>
      </p>
    </div>

    <div class="skillBox my-5 bg-black rounded-md p-5" v-if="skills">
      <SkillcardComp 
      v-for="skill of skills"
      :key="skill.id"
      :skill="skill"
      />
    </div>
    <div v-else>
      Loading...
    </div>

    <h1 class="headingAlt">My Education</h1>

    <div class="TimelineBox w-full my-5 relative">
        <div class="circle w-[50px] h-[50px] bg-black mx-auto rounded-full mb-5">

        </div>
        <div class="line absolute w-3 h-[95%] bg-black top-0 rounded-full">

        </div>
        <div v-if="education">
          <TimelineCardComp
          v-for="educate of education"
          :key="educate.id"
          :educate="educate"
          />
        </div>
        <div v-else>
          Loading...
        </div>
    </div>
  </Main>
</template>

<script>
import SkillcardComp from "@/components/SkillcardComp.vue";
import TimelineCardComp from "@/components/TimelineCardComp.vue";

export default {
  components: {
    SkillcardComp,
    TimelineCardComp
  },
  computed: {
    skills(){
      return this.$store.state.skills
    },
    education(){
      return this.$store.state.education
    }
  },
  mounted(){
    this.$store.dispatch("fetchSkills"),
    this.$store.dispatch("fetchEducation")
  }
};
</script>

<style scoped>

.rankingBox > p{
  overflow: hidden;
  cursor: help;
  font-size: 3.25vw;
}


.rankingBox > p:hover .description {
  /* display: block; */
  transform: translateX(0);
}

.asterisk {
  transition: 0.2s;
}

.rankingBox > p:hover .asterisk {
  opacity: 0;
}

.description{
  transform: translateY(-1000px);
  background-color: var(--black);
  color: var(--white);
  position: absolute;
  top: 5rem;
  right: 0;
  transition: 0.4s;
  max-width: 200px;
  padding: 1rem;
  transition: 0.4s;
  border-radius:0 0 0 0.25rem;
}
.skillBox {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
}


.line{
    left: 50%;
    transform: translateX(-50%);
}

.timelineCard::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 0.75rem;
    background-color: black;
    top: 0;
    left: 25%;
}

.timelineCard:nth-child(even){
    margin-inline: auto 0px;
}

.timelineCard:nth-child(even)::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 0.75rem;
    top: 0;
    left: -25%;
}

.cvButton{
    height: fit-content;
    transition: 0.2s;
    display: none;
}

.cvButton:hover{
  background-color: rgb(233, 31, 31);
}

.cvButton:active{
  background-color: rgb(143, 19, 19);
}

@media screen and (max-width: 400px) {
  .cvButton{
    display: none;
  }

  .skillBox {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 15px;
}
}

@media screen and (min-width: 650px) {

  
  .description{
    right: 50%;
    transform: translateY(-500px) translateX(50%);
    border-radius:0 0 0.25rem 0.25rem;
    max-width: 600px;
    font-size: 1.5rem;
  }

  .rankingBox > p{
    font-size: 2vw;
  }

  .rankingBox > p:hover .description { 
  transform: translateX(50%) translateY(0);
}

.skillBox {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
}

.skillCard{
  align-items: center;
}
}

@media screen and (min-width: 1200px){
  .skillBox {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 15px;
}
}
</style>
