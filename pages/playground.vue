<template>
  <div class="relative w-screen h-screen font-bold text-center grid place-items-center">
    <div class="absolute top-4 left-4 flex gap-4">
      <UniBtn :outlined="color" @click="color = !color">
        Color Palette
      </UniBtn>
      <UniBtn :outlined="button" @click="button = !button">
        Button
      </UniBtn>
    </div>
    <div v-show="button">
      <p class="font-ubuntu text-xl">
        Buttons
      </p>
      <div class="bg-[#10111f] grid grid-cols-3 gap-4 mt-4 p-4 border-[1px] border-white">
        <UniBtn>Primary</UniBtn>
        <UniBtn outlined>
          Primary_outlined
        </UniBtn>
        <UniBtn class="line-through" disabled>
          Primary
        </UniBtn>
      </div>
      <div class="bg-[#10111f] grid grid-cols-4 gap-4 mt-4 p-4 border-[1px] border-white">
        <UniBtn bg="light">
          Light
        </UniBtn>
        <UniBtn class="line-through" bg="light" disabled>
          Light
        </UniBtn>
        <UniBtn bg="light-accent">
          Light-accent
        </UniBtn>
        <UniBtn class="line-through" bg="light-accent" disabled>
          Light-accent
        </UniBtn>
        <UniBtn bg="dark">
          Dark
        </UniBtn>
        <UniBtn class="line-through" bg="dark" disabled>
          Dark
        </UniBtn>
        <UniBtn bg="dark-accent">
          Dark-accent
        </UniBtn>
        <UniBtn class="line-through" bg="dark-accent" disabled>
          Dark-accent
        </UniBtn>
        <UniBtn bg="success">
          Success
        </UniBtn>
        <UniBtn class="line-through" bg="success" disabled>
          Success
        </UniBtn>
        <UniBtn bg="warning">
          Warning
        </UniBtn>
        <UniBtn class="line-through" bg="warning" disabled>
          Warning
        </UniBtn>
        <UniBtn bg="danger">
          Danger
        </UniBtn>
        <UniBtn class="line-through" bg="danger" disabled>
          Danger
        </UniBtn>
      </div>
    </div>
    <div v-show="color">
      <p class="font-ubuntu text-xl">
        Color Palette
      </p>
      <div class="bg-[#10111f] grid grid-cols-2 place-items-center gap-4 mt-4 p-4 border-[1px] border-white">
        <div>Light Shade</div>
        <div class="w-full p-2 bg-light-shade text-[#A59BA3]">
          Satin Linen
        </div>
        <div>Light Accent</div>
        <div class="w-full p-2 bg-light-accent text-[#EAE8DE]">
          Shady Lady
        </div>
        <div>Main/Primary</div>
        <div class="w-full p-2 bg-primary">
          Cranberry
        </div>
        <div>Dark Accent</div>
        <div class="w-full p-2 bg-dark-accent text-[#17182C]">
          Waikawa Gray
        </div>
        <div>Dark Shade</div>
        <div class="w-full p-2 bg-dark-shade text-[#647AAC]">
          Mirage
        </div>
      </div>
    </div>

    <UniBtn bg="dark-accent" to="/" class="absolute bottom-10 mx-auto mt-4">
      Back
    </UniBtn>
  </div>
</template>

<script>
export default {
  name: 'Playground',
  data () {
    return {
      title: 'Playground',
      color: true,
      button: false
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
