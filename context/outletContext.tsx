import React, { createContext, useContext, useState } from 'react';

type Outlet = 'pharmacy' | 'restaurant' | 'lounge' | null;

interface OutletContextType {
  activeOutlet: Outlet;
  setActiveOutlet: (outlet: Outlet) => void;
}

const OutletContext = createContext<OutletContextType | undefined>(undefined);

export const OutletProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeOutlet, setActiveOutlet] = useState<Outlet>(null);

  return (
    <OutletContext.Provider value={{ activeOutlet, setActiveOutlet }}>
      {children}
    </OutletContext.Provider>
  );
};

export const useOutlet = () => {
  const context = useContext(OutletContext);
  if (!context) {
    throw new Error('useOutlet must be used within an OutletProvider');
  }
  return context;
};
