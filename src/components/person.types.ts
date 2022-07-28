type nameType = {
  first: string;
  last: string;
};


type subsProps = { name: string; id: number }

export type PersonProps = {
  name: nameType;
  subscribers: subsProps[];
};
