<template>
  <Main>
    <div class="flex justify-between">
        <h1 class="heading w-fit relative text-black">My Skills</h1>
        <button class="cvButton border-0 bg-primary text-white px-5 py-3 my-auto rounded-sm cursor-pointer">
            Download CV
        </button>
    </div>
    <div class="rankingBox flex gap-5 mt-5 font-bold text-black">
      <p>
        Novice
        <br />
        🌟
        <i class="fa-brands fa-html5"></i>
      </p>
      <p>
        Intermediate
        <br />
        🌟🌟
      </p>
      <p>
        Advanced
        <br />
        🌟🌟🌟
      </p>
      <p>
        Expert
        <br />
        🌟🌟🌟🌟
      </p>
      <p>
        Master
        <br />
        🌟🌟🌟🌟🌟
      </p>
    </div>

    <div class="skillBox my-5 bg-black h-[400px] rounded-md p-5">
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
      <SkillcardComp />
    </div>

    <h1 class="headingAlt">My Education</h1>

    <div class="TimelineBox w-full my-5 relative">
        <div class="circle w-[50px] h-[50px] bg-black mx-auto rounded-full mb-5">

        </div>
        <div class="line absolute w-3 h-[95%] bg-black top-0 rounded-full">

        </div>
        <TimelineCardComp/>
        <TimelineCardComp/>
        <TimelineCardComp/>
        <TimelineCardComp/>
        <TimelineCardComp/>
        <TimelineCardComp/>
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
};
</script>

<style scoped>
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
}
</style>
