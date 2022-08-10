import React, { useEffect, useRef } from "react";

type Props = {};

export const DOMRef = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      DOMRef
      <input type="text" ref={inputRef} />
    </div>
  );
};
