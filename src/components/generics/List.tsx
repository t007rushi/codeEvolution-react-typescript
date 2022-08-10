import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      List
      {items.map((item, index) => {
        return (
          <li key={index} onClick={() => onClick(item)}>
            {/* {item} ERROR */}
          </li>
        );
      })}
    </div>
  );
};
