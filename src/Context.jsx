import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, pageId, setPageId, openSidebar, closeSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
