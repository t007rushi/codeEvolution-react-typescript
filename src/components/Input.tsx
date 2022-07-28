import React, { ChangeEvent } from "react";

type Props = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: Props) => {
  return <input onChange={props.handleChange} />;
};
