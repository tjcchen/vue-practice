// import shop from '../../api/shop';
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
  addProductToCart({state, commit}, product) {
    commit(CART.SET_CHECKOUT_STATUS, null);

    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);

      // When shopping cart does not have this product, then put product to cart
      // However, when we already have this product in cart, we increase cart product quantity
      if (!cartItem) {
        commit(CART.PUSH_PRODUCT_TO_CART, { id: product.id });
      } else {
        commit(CART.INCREMENT_ITEM_QUANTITY, cartItem);
      }

      // Remove 1 item from stock
      commit(`products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true });
    }
  },
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

