<template>
    <div class="testimonialCard flex gap-5 my-5">
        <div class="image flex-[4] bg-black rounded-md">

        </div>
        <div class="testimonialBox flex-[5] gap-3 flex flex-col">
            <h2>
                Name Surname
            </h2>

            <div class="infoBox flex text-white gap-3">
                <div class="textBox bg-black flex-[5] p-3 rounded-md">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente voluptatibus earum vitae vero dolorum animi laboriosam a veritatis repellendus.
                    </p>
                </div>
                <div class="socialsBox flex-1 flex flex-col gap-4">
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {

    }
</script>

<style scoped>

    h2{
        position: relative;
        text-align: start;
        color: var(--black);
        padding-inline-start: 0.5rem;
    }

    h2::after{
        content: '';
        position: absolute;
        bottom: -0.125rem;
        left: 0;
        width: 100%;
        height: 8px;
        background-color: var(--primary-color);
        border-radius: 999px 999px;
    }

    .testimonialCard:nth-child(odd) h2{
        text-align: end;
        padding-inline-end: 0.5rem;
    }

    /* .testimonialCard:nth-child(odd) h2::after{
        border-radius: 999px 999px;
    } */

    .socialsBox > div{
        background-color: orange;
        flex: 1;
        border-radius: 3px;
    }

    .testimonialCard:nth-child(odd) .testimonialBox{
        order: 1;
    }

    .testimonialCard:nth-child(odd) .image{
        order: 2;
    }

    .testimonialCard:nth-child(odd) .textBox{
        order: 2;
    }

    .testimonialCard:nth-child(odd) .socialsBox{
        order: 1;
    }

    .textBox{
        text-align: start;
    }
</style>