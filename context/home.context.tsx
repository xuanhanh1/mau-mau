// import { createContext, useContext, useState, ReactNode } from "react";

// // 1. Define the context shape
// interface HomeContextProps {
//   value?: string;
//   setValue?: (value: string) => void;
// }

// const HomeContext = createContext<HomeContextProps | undefined>(undefined);

// export const HomeContextProvider = ({ children }: { children: ReactNode }) => {
//   const [value, setValue] = useState<string>("default value");

//   return (
//     <HomeContext.Provider value={{ value, setValue }}>
//       {children}
//     </HomeContext.Provider>
//   );
// };

// // 4. Create a custom hook to use the context
// export const useMyContext = () => {
//   const context = useContext(HomeContext);
//   if (!context) {
//     throw new Error("useMyContext must be used within a MyContextProvider");
//   }
//   return context;
// };
