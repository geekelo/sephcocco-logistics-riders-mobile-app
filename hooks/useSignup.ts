// hooks/useSignup.ts
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { saveToken, saveUser } from '@/lib/tokenStorage';
import Constants from 'expo-constants';

type SignupPayload = {
  name: string;
  address: string;
  email: string;
  phone_number: string;
  whatsapp_number: string;
  role?: string; // default to "user"
};

const API_BASE_URL =
  Constants.expoConfig?.extra?.API_BASE_URL ??
  Constants.manifest?.extra?.API_BASE_URL;

export const useSignup = () => {
  return useMutation({
    mutationFn: async (data: SignupPayload) => {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        user: {
          ...data,
          role: data.role ?? 'user',
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
