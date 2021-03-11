import { useQuery } from "react-query";
import axios from "axios";

/* API HELPER
I decide to use the great library react-query, and with that
i can have cool hooks to perform the api calls. All the calls
logic it's abstracted in this file. */

const baseUrl = "/api";

export function useProducts() {
  return useQuery("products", async () => {
    const { data } = await axios.get(`${baseUrl}/products`);
    return data;
  });
}

export function useInverstors(productId) {
  return useQuery(["inverstors", productId], async () => {
    const { data } = await axios.get(`${baseUrl}/products/${productId}/inverstors`);
    return data;
  });
}