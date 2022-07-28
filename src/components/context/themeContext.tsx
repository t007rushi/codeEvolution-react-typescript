import { createContext, useContext, useState } from "react";

type themeChildProp = {
  children: React.ReactNode;
};

type Values = {
  theme: string;
  themeChanger: () => void;
};
const themeContext = createContext<Values | null>(null);

const ThemeProvider = ({ children }: themeChildProp) => {
  const [theme, setTheme] = useState("light");
  const themeChanger = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <themeContext.Provider value={{ theme, themeChanger }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => useContext(themeContext);

export { ThemeProvider, useTheme };
