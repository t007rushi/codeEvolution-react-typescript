import React, { useState } from "react";

type Props = {};

type AuthUser = {
  name: string;
  email: string;
};

export const LoggedIn = (props: Props) => {
  const [userData, setuserData] = useState<AuthUser | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <div style={{ backgroundColor: "violet", padding: "1rem" }}>
      <h1>LoggedIn</h1>
      <button
        onClick={() => {
          setIsLogged(true);
          setuserData({ name: "author", email: "author@example.com" });
        }}
      >
        LOGIN
      </button>
      <button
        onClick={() => {
          setIsLogged(false);
          setuserData(null);
        }}
      >
        LOGOUT
      </button>
      <h2>{isLogged ? "Logged In Succesfully" : "Not Logged In"}</h2>
      <p>
        {userData?.name} and {userData?.email}
      </p>
    </div>
  );
};
