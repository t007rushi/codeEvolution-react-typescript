import React from "react";
import { PersonProps } from "./person.types";

// type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
//   subscribers: { name: string; id: number }[];
// };

export const Person = ({ name, subscribers }: PersonProps) => {
  return (
    <div>
      {name.first}
      <ul>
        {subscribers.map((sub) => {
          return <li key={sub.id}>{sub.name}</li>;
        })}
      </ul>
    </div>
  );
};
