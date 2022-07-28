import React, { CSSProperties } from "react";

type Props = {
  styles: CSSProperties;
};

export const Container = (props: Props) => {
  return <div style={props.styles}>Container</div>;
};
