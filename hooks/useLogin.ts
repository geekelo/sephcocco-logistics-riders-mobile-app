import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Constants from "expo-constants";
import { saveToken, saveUser } from "@/lib/tokenStorage";

type LoginPayload = {
  email: string;
};

const API_BASE_URL =
  Constants.expoConfig?.extra?.API_BASE_URL ??
  Constants.manifest?.extra?.API_BASE_URL;

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email }: LoginPayload) => {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        user: {
          email,
        },
      });
      const { token, user } = response.data;

      if (token) {
        await saveToken(token);
      }

      if (user) {
        await saveUser(user);
      }

      return response.data;
    },
  });
};
