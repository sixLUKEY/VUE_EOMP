<template>
    <div class="bg-primary p-3 gap-3 flex flex-col skillCard overflow-hidden text-white">
        <h5>
            {{ skill.name }}
        </h5>
        <img :src="skill.symbol" :alt="skill.name">
        <p>
            {{ skill.level }}
        </p>
    </div>
</template>

<script>
    export default{
        props:
        [
            "skill"
        ]
    }
</script>

<style scoped>
    img{
        max-width: 100%;
        transition: 0.4s;
        opacity: 0.6;
    }

    h5{
        opacity: 0;
        transition: 0.2s;
        transform: translateY(-1000%);
        font-size: 3vw;
    }

    p{
        opacity: 0;
        transition: 0.2s;
        transform: translateY(1000%);
        font-size: 3vw;
    }

    .skillCard{
        transition: 0.2s;
    }

    .skillCard:hover{
        box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75) inset;
-webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75) inset;
-moz-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.75) inset;
    }

    .skillCard:hover h5 {
        opacity: 1;
        transform: translateY(0);
    }

    .skillCard:hover p {
        opacity: 1;
        transform: translateY(0);
    }

    .skillCard:hover img{
        opacity: 1;
        filter: invert() drop-shadow(-9px 9px 10px #000);
    }

    @media screen and (min-width: 1200px) {
        h5{
            font-size: 1.8vw;
        }

        p{
            font-size: 1.2vw;
        }
    }
</style>