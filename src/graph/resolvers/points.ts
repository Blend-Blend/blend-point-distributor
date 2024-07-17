import { MyContext } from "../../utils/context";

export const Points = async (_parent: any, args: any, _context: MyContext) => {
  return [
    {
      address: "0x0000000000000000000000000000000000000000",
      supply: 100,
      lend: 0,
      sum: 100,
    },
    {
      address: "0x0000000000000000000000000000000000000001",
      supply: 99,
      lend: 0,
      sum: 99,
    },
    {
      address: "0x0000000000000000000000000000000000000002",
      supply: 98,
      lend: 0,
      sum: 98,
    },
    {
      address: "0x0000000000000000000000000000000000000003",
      supply: 97,
      lend: 0,
      sum: 97,
    },
  ];
};

export const Point = async (_parent: any, args: any, _context: MyContext) => {
  if (args.where) {
    let {
      where: { address },
    } = args;
    return {
      address,
      supply: 100,
      lend: 0,
      sum: 100,
      rank: 10,
    };
  } else {
    return null;
  }
};
