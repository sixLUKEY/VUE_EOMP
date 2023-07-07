<template>
  <main>
    <h1 class="heading w-fit relative text-black">About Me</h1>
    <div class="container flex">
      <div class="leftSide mb-5">
        <img
          src="https://i.postimg.cc/9Fsj1LNb/C12-Luke-Evertson-3-copy.jpg"
          alt="Luke Evertson"
          class="profileImage rounded-md"
        />
      </div>
      <div class="rightSide flex flex-col">
        <img
          src="https://i.postimg.cc/NMfpvwzc/Group-23.png"
          alt="ninja2"
          class="image2 my-5"
        />
        
        
        <div class="buttonBox flex gap-5">
          <label class="form-control">
            <input type="radio" name="radio" id="one" value="Date of Birth: 4 May 2001 || Location: Atlantis, Cape Town, South Africa (willing to relocate)" v-model="picked"/>
            Bio
          </label>
          <label class="form-control">
            <input type="radio" name="radio" id="two" value="socials @sixLukey || email: marcoslukerojo@gmail.com || phone: (+27) 81-555-5555" v-model="picked"/>
            Contacts
          </label>
          <label class="form-control">
            <input type="radio" name="radio" id="three" value="Designing || 3d modelling || Gaming || gymming || Football" v-model="picked"/>
            Hobbies
          </label>
        </div>
        <div class="textBox my-5 text-white bg-black rounded-md">
          {{ picked }}
        </div>
      </div>
    </div>

    <div class="container flex">
      <div class="image3">
        <img src="https://i.postimg.cc/wM123Qz4/Group-22.png" alt="ninja" />
      </div>
      <div class="paragraphBox bg-black rounded-md text-white">
        Hi, I am Luke Evertson, a junior Web Developer who prides himself in
        delivering the best. Over the past time I've really come to love web
        design and my passion for the field is constantly growing. I've always
        been fascinated by technology, and today i can realise these dreams by
        creating websites and making them look really nice. I've also dipped my
        toes in animation and 3D modelling which is also one of my big
        interests.
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      picked: "Oh hi there!",
    };
  },
};
</script>

<style scoped>


.form-control {
  font-size: 3vw;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  color: var(--black);
}
.profileImage {
  object-fit: cover;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
}

img {
  max-width: 20vw;
  max-height: 300px;
}

.image2 {
  max-width: 20vw;
}

.leftSide {
  flex: 3;
}

.rightSide {
  flex: 3;
}

.container {
  gap: 1.25rem;
}

.buttonBox > button {
  border: 0;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 2px;
  background-color: var(--primary-color);
  font-weight: bold;
  color: var(--white);
  cursor: pointer;
}

.buttonBox {
  height: fit-content;
}

.textBox,
.paragraphBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  font-size: 3vw;
}

.image3 {
  flex: 1;
}

.paragraphBox {
  flex: 3;
}

input[type="radio"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--primary-color);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}



@media screen and (min-width: 800px) {
  .paragraphBox {
    font-size: 2.5vw;
  }

  .image2 {
    max-width: 300px;
    margin-inline: auto;
  }

  .form-control{
    font-size: 2rem;
  }
}

@media screen and (max-width:400px) {
  .image2{
    display: none;
  }
}
</style>
