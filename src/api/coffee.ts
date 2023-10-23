import api from ".";

export default {
  addNewConfigCoffee(payload: FormData) {
    return api.post("products/coffee", payload);
  },
  getAllConfigsCoffee() {
    return api.get("products/coffee");
  },
  updateConfigsCoffeeCount(payload: FormData) {
    return api.put("products/coffee", payload);
  },
};
