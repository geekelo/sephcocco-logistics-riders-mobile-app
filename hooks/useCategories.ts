import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Constants from "expo-constants";

const API_BASE_URL =
  Constants.expoConfig?.extra?.API_BASE_URL ??
  Constants.manifest?.extra?.API_BASE_URL;

export const useProductCategories = (activeOutlet: string) => {
   const productPath = `sephcocco_${activeOutlet}_product_categories`;
    const endpoint = `${API_BASE_URL}/${activeOutlet}/${productPath}`;
 console.log("Endpoint:", endpoint);

return useQuery({
  queryKey: ["productCategories", activeOutlet],
  queryFn: async () => {
    const response = await axios.get(endpoint);
    console.log("Fetched Category Data:", response.data);
    return response.data;
  },
  enabled: !!activeOutlet,
});

   
   
};
