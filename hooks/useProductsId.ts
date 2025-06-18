import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Constants from "expo-constants";

const API_BASE_URL =
  Constants.expoConfig?.extra?.API_BASE_URL ??
  Constants.manifest?.extra?.API_BASE_URL;

export const useProductById = (activeOutlet: string, id: string | null) => {
  const productPath = `sephcocco_${activeOutlet}_products`;
  const endpoint = `${API_BASE_URL}/${activeOutlet}/${productPath}/${id}`;

  return useQuery({
    queryKey: ["product", activeOutlet, id],
    queryFn: async () => {
      console.log("[useProductById] Fetching product", id, "for outlet:", activeOutlet);
      console.log("[useProductById] Full URL:", endpoint);

      try {
        const response = await axios.get(endpoint);
        console.log("[useProductById] Response data:", response.data);
        return response.data;
      } catch (error) {
        console.error("[useProductById] Error fetching product:", error);
        throw error;
      }
    },
    enabled: !!activeOutlet && !!id,
  });
};
