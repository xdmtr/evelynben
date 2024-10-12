import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ComponentLoadContextType {
  markComponentAsLoaded: (componentName: string) => void;
  allComponentsLoaded: boolean;
}

// Create the context
const ComponentLoadContext = createContext<ComponentLoadContextType | undefined>(undefined);

// Hook to use the context
export const useComponentLoad = () => {
  const context = useContext(ComponentLoadContext);
  if (!context) {
    throw new Error('useComponentLoad must be used within a ComponentLoadProvider');
  }
  return context;
};

// Provider component
export const ComponentLoadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loadedComponents, setLoadedComponents] = useState<Record<string, boolean>>({
    GuestInvitation: false,
    BrideInitiation: false,
    WeddingDate: false,
    BrideGallery: false,
    TheBride: false,
    TheGroom: false,
    LoveStory: false,
    PemberkatanAddress: false,
    WeddingAddress: false,
    GuestConfirmationMessage: false,
  });

  const markComponentAsLoaded = (componentName: string) => {
    console.log(`${componentName} loaded`); // Log for debugging
    setLoadedComponents((prev) => ({ ...prev, [componentName]: true }));
  };

  const allComponentsLoaded = Object.values(loadedComponents).every((status) => status === true);

  return (
    <ComponentLoadContext.Provider value={{ markComponentAsLoaded, allComponentsLoaded }}>
      {children}
    </ComponentLoadContext.Provider>
  );
};
