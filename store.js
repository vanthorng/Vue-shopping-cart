import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const products = [
  {
    name: 'Lacoste',
    price: '29.90'
  },
  {
    name: 'Ralph Lauren.',
    price: '17.90'
  },
  {
    name: 'Gucci',
    price: '23.90'
  },
  {
    name: 'Hugo Boss',
    price: '19.90'
  },
  {
    name: 'Brooks Brothers',
    price: '18.90'
  },
  {
    name: 'Vineyard Vines',
    price: '21.90'
  }
];


const store = new Vuex.Store({
  state: {
    products: products,
    cart: []
  },
  getters: {
    countCart: state => {
      return state.cart.length;
    }
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload);
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('addToCart', payload.product);
    }
  }
})

export default store

