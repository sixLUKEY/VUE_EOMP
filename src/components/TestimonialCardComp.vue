<template>
    <div class="testimonialCard flex gap-5 my-5">
            <img :src="testimonial.image" :alt="testimonial.name" class="image">
        <div class="testimonialBox flex-[5] gap-3 flex flex-col">
            <h2>
                {{ testimonial.name }}
            </h2>

            <div class="infoBox flex text-white gap-3">
                <div class="textBox bg-black flex-[5] p-3 rounded-md">
                    <p>
                        {{ testimonial.message }}
                    </p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        props: [
            "testimonial"
        ]
    }
</script>

<style scoped>

    img{
        max-width: 100%;
        max-width: 200px;
        object-fit: cover;
    }

    h2{
        position: relative;
        text-align: start;
        color: var(--black);
        padding-inline-start: 0.5rem;
        font-size: 6vw;
    }

    p{
        font-size: 3vw;
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

    @media screen and (min-width: 1000px) {
        img{
            max-width: 300px;
        }
    }

    @media screen and (max-width:400px) {
        img{
            max-width: 20vw;
        }
    }
</style>