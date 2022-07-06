<template>
	<div>
    <div class="cd-single-item">
      <a href="#0">
        <cart-colors :colors="colors"></cart-colors>
      </a>
      <div class="cd-customization">
        <cart-dropdown :options="colors" :color="true" v-model="product.color"></cart-dropdown>
        <cart-dropdown :options="sizes" v-model="product.size"></cart-dropdown>
        <button class="add-to-cart" :class="{'is-added': isAdded}" @click="addProduct()">
          <em>Add to Cart</em>
          <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
            <path stroke-dasharray="19.79 19.79"
						:stroke-dashoffset="stroke" fill="none"
						stroke="#FFFFFF" stroke-width="2" stroke-linecap="square"
						stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"/>
          </svg>
        </button>
      </div> <!-- .cd-customization -->
    </div> <!-- .cd-single-item -->
    <div class="cd-item-info">
      <b><a href="#0">{{product.name}}</a></b>
      <em>${{product.price}}</em>
    </div> <!-- cd-item-info -->
	</div>
</template>

<script>
import cartDropdown from './CartDropdown'
import cartColors from './CartColors'
export default {
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
	components: {
		cartDropdown,
		cartColors
	},
	data () {
		return {
			isAdded: false,
			stroke: 20,
			colors: [
				{
					value: 'Indigo'
				},
				{
					value: 'Red'
				},
				{
					value: 'Yellow'
				}
			],
			sizes: [
				{
					value: 'Small'
				},
				{
					value: 'Medium'
				},
				{
					value: 'Large'
				}
			]
		}
	},
  methods: {
    addProduct () {
      // this.$store.commit('addToCart', this.product);
      this.$store.dispatch('addToCart', {product: this.product});
			this.isAdded = true;
			let int = setInterval(() => {
				this.stroke--;
			}, 400 / this.stroke );
			setTimeout(() => {
				this.isAdded = false;
				clearInterval(int);
				this.stroke = 20;
			}, 500);
    }
  }
}

</script>