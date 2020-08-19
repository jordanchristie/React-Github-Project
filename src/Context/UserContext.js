import React, { useState, createContext } from "react";

export const UserContext = createContext({
  user: {},
  error: {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const fetchUser = async (name) => {
    try {
      const res = await fetch(`https://api.github.com/users/${name}`);
      if (!res.ok) {
        setError({ message: res.statusText });
      }
      const json = await res.json();

      setUser(json);
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    user,
    fetchUser,
    error,
  };

  console.log(value);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
