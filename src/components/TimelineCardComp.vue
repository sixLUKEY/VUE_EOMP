<template>
    <div class="w-2/5 h-fit bg-black text-white p-3 rounded-md timelineCard relative flex flex-col gap-3">
        <p class="name text-start">
            {{ educate.name }}
        </p>
        
        <p class="type self-center">
            {{ educate.type }}
        </p>

        <p class="length text-end">
            {{ educate.length }}
        </p>
    </div>
</template>

<script>

    export default{
        props: [
            "educate"
        ]
    }

</script>

<style scoped>
    
    .name{
        font-size: 3vw;
    }
    .type{
        font-size: 5vw;
    }

    .length{
        font-size: 3vw;
        color: #e47676;
    }

    @media screen and (min-width: 650px) {
        .name{
        font-size: 1.5vw;
    }
    .type{
        font-size: 2.5vw;
    }

    .length{
        font-size: 1.5vw;
        color: #e47676;
    }
    }

</style>