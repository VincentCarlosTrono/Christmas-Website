import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>("");

export const ThemeProvider = (props: any) => {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  return (
    <div>
      <ThemeContext.Provider value={{ darkmode, setDarkmode }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
};
