<template>
<ul class="cd-slider-wrapper">
  <li v-for="(item, index) in colors"
  :class="{selected: item.active}">
    <img :src="'https://codyhouse.co/demo/quick-add-to-cart/img/thumb-'+(index + 1)+'.jpg'"	alt="Preview image">
  </li>
</ul>
</template>

<script>
export default {
  props: {
    colors:{
      type: Array,
      default: []
    }
  },
  mounted () {
    this.$set(this.colors[0], 'active', true);
  }
}
</script>

<style>

</style>
