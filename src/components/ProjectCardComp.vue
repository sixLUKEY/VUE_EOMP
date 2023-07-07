<template>
  <div class="w-[90%] h-[200px] flex projectCard text-black my-5 gap-5">
    <div class="flex-[2] text-center flex flex-col imageBox">
      <h2>Lorem</h2>
      <div class="image bg-black flex-1 rounded-md">
        
      </div>
    </div>
    <div class="flex flex-col flex-1 gap-3 textBox">
      <div class="flex-1 bg-red-600">
      </div>
      <div class="flex-[6] bg-primary text-white p-2 rounded-md">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perspiciatis ipsam nostrum omnis veniam temporibus est accusamus ab nisi aliquid?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.projectCard{
    z-index: 20;
}

.projectCard:nth-child(odd) {
  margin-inline: auto 0;
}

.projectCard:nth-child(even) > .imageBox {
  order: 2;
}

.projectCard:nth-child(even) > .textBox {
  order: 1;
}

p{
    font-size: 0.9rem;
}
</style>
