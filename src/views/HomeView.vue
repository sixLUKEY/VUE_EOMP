<template>
  <div class="hero w-full h-[85vh] bg-primary flex gap-5 p-5 relative">
    <div class="leftSection flex flex-col gap-5">
      <div class="topSection flex text-start text-white items-center z-10">
        <span class="heroHeading">
          Web Developer
        <br />
        UI/UX designer
        <br />
        Lorem User
        </span>
      </div>
      <div class="bottomSection flex justify-start items-center">
        <router-link to="/projects" class="z-10"
          ><button
            class="z-20 workButton border-none px-8 py-3 rounded-sm text-primary my-auto cursor-pointer"
          >
            My Work
            
          </button></router-link
        >
      </div>
    </div>
    <div class="rightSection flex flex-col gap-5">
      <div class="topSection"></div>
      <div class="bottomSection text-white flex items-end text-start z-20">
        <span class="heroParagraph">
          I am a South African based web developer who designs user interfaces and
        creates 3D character models
        </span>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-3/5 h-2/5 backgroundBlock1"></div>
    <div class="absolute top-0 right-0 w-2/5 h-3/5 backgroundBlock2"></div>
    <p class="absolute font-bold top-[50%] backgroundText1">
      テ　フ　く　こ キ　ィ　つ　こ ス　ラ　か　に ト　ー　の　い
    </p>
    <p class="absolute font-bold backgroundText2 right-2 z-10">
      者　デ　や　ー　す　と　私 　　ル　3　フ　 　 す　は 　　の　D　ェ　
      　る　南 　　作　キ　ー　ユ　ウ　ア 　　成　ャ　ス　ー　ェ　フ
      　　を　ラ　の　ザ　ブ　リ 　　行　ク　デ　ー　サ　カ
      　　う　タ　ザ　イ　イ　を 　　開　ー　イ　ン　ト　拠
      　　発　モ　ン　タ　で　点
    </p>
    <img
      src="https://i.postimg.cc/sfm84k72/pngwing-com-79.png"
      alt="kunai"
      class="absolute kunai w-[200px]"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.heroHeading{
  font-size: 10vw;
}

.kunai {
  top: 40%;
  left: 33%;
  z-index: 998;
  transition: 0.2s;
  width: 25vw;
}

.kunai:hover{
  scale: 1.5;
}

.backgroundBlock1,
.backgroundBlock2 {
  background-color: black;
  opacity: 0.2;
  z-index: 1;
}

.backgroundBlock1 {
  height: calc(40% - 1.25rem);
  width: calc(60% - 2.5rem);
}

.backgroundBlock2 {
  height: calc(60% - 1.25rem);
  width: calc(40%);
}

.topSection,
.leftSection {
  flex: 3;
}

.bottomSection,
.rightSection {
  flex: 2;
}

.leftSection .topSection {
  font-size: 3.2rem;
}

.backgroundText1,
.backgroundText2 {
  font-size: 1.25rem;
  width: 80px;
  opacity: 0.15;
  transition: 0.4s;
  color: black;
  height: fit-content;
}

.backgroundText2 {
  width: 35%;
}

.backgroundText1:hover {
  opacity: 1;
  text-shadow: 0 0 10px #ffffff;
}

.backgroundText2:hover {
  opacity: 1;
  text-shadow: 0 0 10px #ffffff;
}

.rightSection .bottomSection {
  font-size: 1.4rem;
}

a {
  z-index: 5;
}

.workButton {
  font-weight: 900;
  transition: 0.2s;
}

.workButton:hover {
  scale: 1.1;
  background-color: black;
  color: white;
  filter: drop-shadow(-5px 5px 5px #00000094);
}

@media screen and (min-width: 900px) {
  .heroHeading{
    font-size: 6.5vw;
  }

  .heroParagraph{
    font-size: 4vw;
  }

  .kunai{
    top: 33%;
    left: 33%;
  }
}

@media screen and (max-width:400px) {
  .backgroundText2{
    width: 200px;
  }
}
</style>
