import React from "react";

type leftToRight = "left" | "center" | "right";
type topToBottom = "top" | "center" | "bottom";

type Props = {
  position: Exclude<`${leftToRight}-${topToBottom}`,"center-center" > | "center"
};

const Toast = (props: Props) => {
  return <div>Toast</div>;
};

export default Toast;
