// hooks/useAuthStatus.ts
import { useEffect, useState } from 'react';
import { getToken } from '@/lib/tokenStorage';

export function useAuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      setIsLoggedIn(!!token);
    };

    checkAuth();
  }, []);

  return { isLoggedIn };
}
