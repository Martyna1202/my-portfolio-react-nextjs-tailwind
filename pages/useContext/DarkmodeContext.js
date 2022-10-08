import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode() {
    setDarkMode((prev) => !prev);
  }

  const exportData = { darkMode, changeDarkMode };

  return (
    <DarkModeContext.Provider value={exportData}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkModeContext() {
  return useContext(DarkModeContext);
}

export { DarkModeContextProvider, useDarkModeContext };
