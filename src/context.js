import React, { useState, useContext } from 'react';
import sublinks from './data'; // sublinks dosyasını import edin

const AppContext = React.createContext(); // Doğru context oluşturma

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, SetIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setpage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    SetIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    SetIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setpage(page);
    setLocation(coordinates);
    SetIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    SetIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider value={{
      isSubmenuOpen,
      isSidebarOpen,
      openSubmenu,
      openSidebar,
      closeSubmenu,
      closeSidebar,
      location,
      page
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
