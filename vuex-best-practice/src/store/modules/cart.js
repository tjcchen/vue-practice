import shop from '../../api/shop';
import { CART, PRODUCTS } from '../mutation-types';

// Initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null
};

// PUSH_PRODUCT_TO_CART: 'pushProductToCart',
// INCREMENT_ITEM_QUANTITY: 'incrementItemQuantity',
// SET_CART_ITEMS: 'setCartItems',
// SET_CHECKOUT_STATUS: 'setCheckoutStatus'

// mutations
const mutations = {
  [CART.PUSH_PRODUCT_TO_CART](state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },

  [CART.INCREMENT_ITEM_QUANTITY](state, { id }) {
    let cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },

  [CART.SET_CART_ITEMS](state, { items }) {
    state.items = items;
  },

  [CART.SET_CHECKOUT_STATUS](state, status) {
    state.checkoutStatus = status;
  }
};

// actions
const actions = {

};

// getters
const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

