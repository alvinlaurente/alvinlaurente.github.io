<template>
  <div class="w-screen h-screen font-bold text-center grid place-items-center">
    <div>
      <p class="font-ubuntu text-xl">
        Buttons:
      </p>
      <div class="grid grid-cols-3 gap-4 mt-4 p-4 border-[1px] border-white">
        <UniBtn>Primary</UniBtn>
        <UniBtn outlined>
          Primary_out
        </UniBtn>
        <UniBtn disabled>
          Primary_dis
        </UniBtn>
        <UniBtn bg="success">
          Success
        </UniBtn>
        <UniBtn bg="success" disabled>
          Success_dis
        </UniBtn>
        <UniBtn bg="warning">
          Warning
        </UniBtn>
        <UniBtn bg="warning" disabled>
          Warning_dis
        </UniBtn>
        <UniBtn bg="danger">
          Danger
        </UniBtn>
        <UniBtn bg="danger" disabled>
          Danger_dis
        </UniBtn>
      </div>
      <UniBtn to="/" class="mx-auto mt-4">
        Back
      </UniBtn>
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
