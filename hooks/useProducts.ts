import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Constants from "expo-constants";

const API_BASE_URL =
  Constants.expoConfig?.extra?.API_BASE_URL ??
  Constants.manifest?.extra?.API_BASE_URL;

export const useProducts = (activeOutlet: string) => {
  const productPath = `sephcocco_${activeOutlet}_products`;
  const endpoint = `${API_BASE_URL}/${activeOutlet}/${productPath}`;

 return useQuery({
  queryKey: ["products", activeOutlet],
  queryFn: async () => {
    // console.log("[useProducts] Fetching products for outlet:", activeOutlet);
    // console.log("[useProducts] API_BASE_URL:", API_BASE_URL);
    // console.log("[useProducts] Full URL:", endpoint);

    try {
      const response = await axios.get(endpoint);
      // console.log("res", response)
      // console.log("[useProducts] Response data:", response.data);

      // Assuming response.data has a 'products' field with the array
      return response.data.products ?? response.data;
    } catch (error) {
      console.error("[useProducts] Error fetching products:", error);
      throw error;
    }
  },
  enabled: !!activeOutlet,
});

};

