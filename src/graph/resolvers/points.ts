import { MyContext } from "../../utils/context";

export const Points = async (_parent: any, args: any, _context: MyContext) => {
  return _context.client?.pointSummary.findMany({
    orderBy: {
      points: "desc",
    },
  });
};

export const Point = async (_parent: any, args: any, _context: MyContext) => {
  if (args.where) {
    let {
      where: { address },
    } = args;
    return _context.client?.pointSummary.findFirst({
      where: { address },
    });
  } else {
    return null;
  }
};
