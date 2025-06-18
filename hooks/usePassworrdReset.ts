// hooks/usePasswordReset.ts
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Constants from 'expo-constants';

const API_BASE_URL =
  Constants.expoConfig?.extra?.API_BASE_URL ??
  Constants.manifest?.extra?.API_BASE_URL;

export const useRequestReset = () =>
  useMutation({
    mutationFn: async (email: string) => {
      const response = await axios.post(`${API_BASE_URL}/password_resets?email=${email}`, {
        email,
      });
       return response.data;
    },
  });

export const useResetPassword = () =>
  useMutation({
    mutationFn: async ({
      token,
      password,
      password_confirmation,
    }: {
      token: string;
      password: string;
      password_confirmation: string;
    }) => {
      const responses = await axios.patch(`${API_BASE_URL}/password_resets/${token}?otp=${token}`,
  {
    user: { password, password_confirmation },
  }
);

      return responses.data;
    },
  });
