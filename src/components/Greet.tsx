import React from "react";

type Props = {
  name: string;
  age?: number;
};

export const Greet = (props: Props) => {
  return (
    <div>
      Greet
      <h1>Hello {props.name}</h1>
      <h1>{props.age ? props.age:"22"}</h1>
    </div>
  );
};
