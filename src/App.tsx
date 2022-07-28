import React from "react";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { ThemeProvider } from "./components/context/themeContext";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { LoggedIn } from "./components/LoggedIn";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { Counter } from "./components/state/Counter";
import { Status } from "./components/Status";

function App() {
  const name = {
    first: "Tony",
    last: "Stark",
  };

  const subs = [
    { name: "yash", id: 1 },
    { name: "adi", id: 2 },
    { name: "vijay", id: 3 },
    { name: "rushi", id: 4 },
  ];

  return (
    <div className="App">
      <ThemeProvider>
        <Counter />
      </ThemeProvider>
      <LoggedIn />
      <Greet name="Rushikesh" age={23} />
      <Person name={name} subscribers={subs} />
      <Status status="loading" />
      <Heading>Something to print</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
      <Input
        handleChange={(e) => {
          console.log(e);
        }}
      />
      <Button
        handleClick={() => {
          console.log("Hello btn");
        }}
      />
      <Container
        styles={{
          border: "1px solid black",
          padding: "10px",
          backgroundColor: "skyblue",
          width: "1rem",
        }}
      />
    </div>
  );
}

export default App;
