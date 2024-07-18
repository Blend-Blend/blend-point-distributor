import assert from "assert";
import Decimal from "decimal.js";

describe("add function", function () {
  it("should return the sum of two numbers", function () {
    let bigIntValue = BigInt("100000000000000000");
    console.log(bigIntValue);

    let x = Number(bigIntValue) / Number(BigInt(10 ** 18));
    console.log(x);

    let ybigValue = new Decimal("3333000000000000000000");
    console.log(bigIntValue);

    let y = ybigValue.dividedBy(new Decimal(10).pow(18));
    console.log(y);
  });
});
