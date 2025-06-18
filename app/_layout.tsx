// app/_layout.tsx
import { Slot } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { useColorScheme } from 'react-native';
import { queryClient } from '../lib/react-query';
import { AuthProvider } from '../context/authContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'PTSerif-Regular': require('@/assets/fonts/PTSerif-Regular.ttf'),
    'Raleway-Regular': require('@/assets/fonts/Raleway-Regular.ttf'),
    'RuslanDisplay-Regular': require('@/assets/fonts/RuslanDisplay-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
        
      <Slot />

      <StatusBar style="auto" />
    
      </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
