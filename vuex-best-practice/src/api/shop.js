/**
 * Mock Product Data
 * 
 * @Date 2020-06-16
 */

const _products = [
  { "id": 1, "title": "Huawei Mate 20", "price": 3999, "inventory": 2 },
  { "id": 2, "title": "MI Version 9", "price": 2999, "inventory": 0 },
  { "id": 3, "title": "OPPO R17", "price": 3999, "inventory": 5 }
];

export default {
  getProducts: function(cb) {
    setTimeout(() => cb(_products), 0);
  },

  buyProducts: function(products, cb, errorCb) {
    setTimeout(() => {
      Math.random() > 0.5 ? cb() : errorCb();
    }, 100);
  }
}

