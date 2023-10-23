import authApi from "@/api/coffee";
import { createFormData } from "@/utils/formData";
import { Coffee, CoffeeNew, CoffeeCountUpdate } from "@/types/coffee";

export default {
  async addNewConfigCoffee(payload: CoffeeNew): Promise<Coffee | null> {
    try {
      const formData = createFormData(payload);
      const { data } = await authApi.addNewConfigCoffee(formData);
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
  async getAllConfigsCoffee(): Promise<Coffee[]> {
    try {
      const { data } = await authApi.getAllConfigsCoffee();
      return data;
    } catch (e) {
      console.error(e);
      return [];
    }
  },
  async updateConfigsCoffeeCount(
    payload: CoffeeCountUpdate
  ): Promise<Coffee | null> {
    try {
      const formData = createFormData(payload);
      const { data } = await authApi.updateConfigsCoffeeCount(formData);
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  },
};
