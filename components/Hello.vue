<template>
  <div class="hello">
    <a href="#0" class="cd-cart" :class="{'items-added': countCart > 0}">
      <span>{{countCart}}</span>
    </a>
    <ul class="cd-gallery">
      <li v-for="item in products" :key="item.name">
        <cart-item :product="item"></cart-item>
      </li>
    </ul>
    <pre>{{cart}}</pre>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import cartItem from "./CartItem";
export default {
  name: "hello",
  components: {
    cartItem
  },
  computed: {
    ...mapState(["products", "cart"]),
    ...mapGetters(["countCart"])
  }
};
</script>