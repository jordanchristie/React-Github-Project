import React from "react";
import Header from "./Header/Header";
import User from "./User/User";
import { UserContextProvider } from "../Context/UserContext";
import { ErrorContextProvider } from "../Context/ErrorContext";

const App = () => {
  return (
    <ErrorContextProvider>
      <UserContextProvider>
        <main>
          <Header />
          <div className="container">
            <User />
          </div>
        </main>
      </UserContextProvider>
    </ErrorContextProvider>
  );
};

export default App;
