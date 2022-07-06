<template>
<div :class="[selectClass, {size: !color, color: color, 'is-open': open}]">
  <ul class="cart-dropdown" @click="open = !open">
    <li v-for="(item, index) in options"
    @click="setActive(index)"
    :class="[colorCount(index), {active: item.active}]">
      {{item.value}}
    </li>
  </ul>
</div> 
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    color: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      open: false,
      selectClass: 'selected-1'
    }
  },
  mounted () {
    this.$emit('input', this.options[0].value);
    // set random color
    var x = Math.floor((Math.random() * 3));
    this.setActive(x);
  },
  methods: {
    colorCount (index) {
      if (this.color) {
        return 'color-' + (index + 1);
      }
    },
    setActive (index) {
      const _self = this;
      _self.options.map((item) => {
        console.log(item);
        _self.$set(item, 'active', false);
      });
      _self.$set(_self.options[index], 'active', true);
      this.selectClass = 'selected-' + (index + 1);
      this.$emit('input', _self.options[index].value)
    }
  }
}
</script>
