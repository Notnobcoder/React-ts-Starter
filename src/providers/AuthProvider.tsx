
"use client";

import React, {
  createContext,
  useContext,
} from "react";
import { useQuery } from "react-query";
import { ApiClient } from "../apiClient/get";



type AuthContextD = {
  isLoggedIn: boolean;
};

const MyContext = createContext({} as AuthContextD);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {



  const { isError } = useQuery("validateToken", ApiClient.validateToken, {
    retry: false,
  });


  return (
    <MyContext.Provider
      value={{ isLoggedIn: !isError }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useAuth = () => useContext(MyContext);

export default AuthProvider;
