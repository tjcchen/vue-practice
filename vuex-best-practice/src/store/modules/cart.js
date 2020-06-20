// import shop from '../../api/shop';
import { CART, PRODUCTS } from '../mutation-types';
import shop from '../../api/shop';

// Initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null
};

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

      // [IMPORTANT]: the 3rd parameter will help transform commit from local to global scope,
      // this is always used in manipulate other module's mutation
      // Remove 1 item from stock
      commit(`products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true });
    }
  },

  checkout({ state, commit }, products) {
    // const savedCartItems = state.items;

    const savedCartItems = [...state.items];

    console.log('[cart checkout savedCartItems]:');
    console.log(savedCartItems);

    commit(CART.SET_CHECKOUT_STATUS, null);

    // Empty cart
    commit(CART.SET_CART_ITEMS, { items: [] });

    shop.buyProducts(
      products,

      () => {
        commit(CART.SET_CHECKOUT_STATUS, 'successful');
      },
      () => {
        commit(CART.SET_CHECKOUT_STATUS, 'failed');

        // Rollback to the cart saved status before sending the request
        commit(CART.SET_CART_ITEMS, { items: savedCartItems });
      }
    );
  }
};

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      console.log('[cart getters]: ');
      console.log({id: id, qnty: quantity});

      const product = rootState.products.all.find(product => product.id === id);

      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    // Investigate array map and reduce
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

