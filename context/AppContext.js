import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /*
    ********
    *********
    ***********
    MISC
  */

  // Topbar Title
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");

  // Loading states
  const [authLoading, setAuthLoading] = useState(false);
  const [newEventLoading, setNewEventLoading] = useState(false);

  /************
   *********
   ********
   */

  /*
    ********
    *********
    ***********
    FUNCTIONS
  */

  /* ***********
   *********
   ********
   */

  // ****Fetch Everything ****//
  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        /*
          ********
          *********
          ***********
          MISC
        */
        // Loading states
        authLoading,
        newEventLoading,

        setAuthLoading,
        setNewEventLoading,

        /* ***********
         *********
         ********
         */
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
