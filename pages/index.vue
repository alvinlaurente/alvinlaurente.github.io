<template>
  <div class="w-screen h-screen font-bold text-center grid place-items-center">
    <div>
      <p class="font-ubuntu text-2xl mb-4 capitalize">
        Hi, I'm <span class="font-noto text-primary">Alvin</span>! Enjoy the journey ahead.
      </p>
      <NuxtLink to="/playground" class="flex gap-2 items-center text-sm transition ease-in-out hover:text-primary">
        <i class="text-primary fa fa-chevron-right animate-ping" />
        Playground
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HiWorld',
  data () {
    return {
      title: 'Hi World'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
