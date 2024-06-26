import React from "react";

const AuthContext = React.createContext();

export const UserProvider = AuthContext.Provider;
export const UserConsumer = AuthContext.Consumer;

export default AuthContext;