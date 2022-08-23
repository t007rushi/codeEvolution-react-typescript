import React from "react";

type RandomNumberProps = {
  value: number;

};

type isPositiveprops = RandomNumberProps & {
    isPositive?: boolean;
    isNegative?: never;
    isZero?: never;
}

type isNegativeprops = RandomNumberProps & {
    isPositive?: never;
    isNegative?: boolean;
    isZero?: never;
}

type isZeroprops = RandomNumberProps & {
    isPositive?: never;
    isNegative?: never;
    isZero?: boolean;
}

type restrictedProps = isPositiveprops | isZeroprops |isNegativeprops

export const Random = ({ value, isPositive, isNegative, isZero }: restrictedProps) => {
  return (
    <div>
      Random
      {value} {isPositive && "is Positive"} {isNegative && "is Negative"}{" "}
      {isZero && "is Zero"}
    </div>
  );
};
