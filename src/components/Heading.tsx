import React from "react";

type Props = {
  children: string;
};

export const Heading = ({children}: Props) => {
  return <div>{children}</div>;
};
