import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({});

const UiThemeProvider = ({ children }) => {
 
  // const [theme, setTheme] = useState(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   return savedTheme || "light";
  // });

  const [theme, setTheme] = useState(() => {
    
    return  "light";
  });



  
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    
    
  }, [theme]); 

  return (
  
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default UiThemeProvider;
