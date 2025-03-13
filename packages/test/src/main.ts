#!/usr/bin/env node

import dotenv from "dotenv";

dotenv.config();

const main = () => {
  const pwd = process.cwd();
  console.log(pwd);
  console.log(process.env.is_debug);
  console.log("Hello World");
};

main();
