import { createContext } from "react";

// consumer
 export const MyStore = createContext();

// provider
 export const ContextProvider = ({Children}) => {
   return <MyStore.Provider>{Children}</MyStore.Provider>
}