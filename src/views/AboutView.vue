<template>
  <main>
    <div class="container flex">
      <div class="leftSide">
        <h1 class="heading w-fit relative text-black">
          About Me
        </h1>
        <div class="image h-[300px] bg-secondary">
          
        </div>
      </div>
      <div class="rightSide flex flex-col">
        <div class="image2 h-[150px] bg-secondary my-5">

        </div>
        <div class="buttonBox flex justify-between">
          <button>
            Details
          </button>
          <button>
            More
          </button>
          <button>
            Most
          </button>
        </div>
        <div class="textBox my-5 text-white bg-black rounded-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis nisi unde ducimus cumque optio consequatur delectus ipsam ut ipsum!
        </div>
      </div>

    </div>

    <div class="container flex">
      <div class="image3 h-[200px] bg-secondary">

      </div>
      <div class="paragraphBox bg-black rounded-md text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magnam vitae magni ea nisi, beatae dolor aliquam, deserunt temporibus odit sapiente similique aliquid, autem natus voluptas officiis. Assumenda, quidem consequuntur! Ex optio culpa repudiandae sequi porro, eum saepe. Porro optio odit mollitia consequatur nisi iste at, animi laudantium unde nobis?
      </div>
    </div>
    
  </main>
</template>

<script>


</script>

<style scoped>

  .leftSide{
    flex: 3;
  }

  .rightSide{
    flex: 3;
  }

  .container{
    gap: 1.25rem;
  }
  
  .buttonBox > button{
    border: 0;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 2px;
    background-color: var(--primary-color);
    font-weight: bold;
    color: var(--white);
    cursor: pointer;
  }

  .buttonBox{
    height: fit-content;
  }

  .textBox, .paragraphBox{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 1rem;
  }

  .image3{
    flex: 1;
  }

  .paragraphBox{
    flex: 3;    
  }
</style>
