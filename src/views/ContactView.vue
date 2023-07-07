<template>
  <main>
    <h1 class="heading w-fit relative text-black">Contact Me</h1>
    <img src="https://i.postimg.cc/tJMJnk2f/Hotpot-1-cutout-1.png" alt="hawk">
    <form action="https://formspree.io/f/mdoroegv" method="POST" class="flex flex-col">
      <label for="firstName">*First Name</label>
      <input
        type="text"
        name="Name"
        id="firstName"
        placeholder="Your First Name"
        required
      />
      <label for="lastName">*Last Name</label>
      <input type="text" name="lastName" id="lastName" placeholder="Your Last name" required/>
      <label for="email">*Email</label>
      <input type="email" name="email" id="email" placeholder="Your email address" required>
      <label for="textArea">Leave a Message!</label>
      <textarea name="textarea" id="textArea" rows="6"></textarea>

      <button type="submit">Submit!</button>
    </form>
  </main>
</template>

<script>


</script>

<style scoped>

    img{
        position: absolute;
        max-width: 60vw;
        top: 25vh;
        right: 0;
    }

    input{
        width: 40vw;
        height: 3rem;
        border: 0;
        padding-left: 1rem;
        background-color: var(--black);
        color: var(--white);
        border-radius: 0.25rem;
        font-weight: bold;
    }

    textarea{
        border: 0;
        background-color: var(--black);
        color: var(--white);
        font-weight: bold;
        padding: 1rem;
        border-radius: 0.25rem;
        max-width: 800px;
    }

    input::placeholder{
        color: var(--white);
    }

    label{
        text-align: start;
        margin: 2rem 0 0 0;
        color: var(--primary-color);
        font-size: 1.25rem;
    }

    button{
        width: 20vw;
        max-width: 7rem;
        height: 2.5rem;
        margin-block: 2rem;
        border: 0;
        background-color: var(--primary-color);
        color: var(--white);
        font-weight: bold;
        border-radius: 0.25rem;
        transition: 0.2s;
        cursor: pointer;
    }

    button:hover{
        background-color: rgb(222, 32, 32);
    }

    button:active{
        background-color: rgb(148, 17, 17);
    }


    @media screen and (max-width: 450px) {
        img{
            display: none;
        }

        input{
            width: 100%;
        }
    }

    @media screen and (min-width: 600px) {
        img{
            top: 5vh;
        }
    }
</style>
