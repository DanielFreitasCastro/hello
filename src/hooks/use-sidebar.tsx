import { createContext, type ReactNode, useState, useContext } from 'react';

interface SidebarContextType {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType>({
  showSidebar: false,
  setShowSidebar: () => {},
});

export function SidebarProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar(): SidebarContextType {
  return useContext(SidebarContext);
}
