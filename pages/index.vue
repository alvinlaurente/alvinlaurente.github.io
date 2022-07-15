<template>
  <div class="w-screen h-screen bg-black font-bold text-center grid place-items-center">
    <div class="text-white">
      Hi, world!
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
