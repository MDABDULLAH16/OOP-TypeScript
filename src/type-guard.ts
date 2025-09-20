{
  // type guard with typeof in runtime checking
  type StringOrNumber = string | number;

  const add = (
    param1: StringOrNumber,
    param2: StringOrNumber
  ): StringOrNumber => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  const result2 = add(2, "3");
  console.log({ result1, result2 });

  type normalUser = {
    name: string;
  };
  type adminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: normalUser | adminUser) => {
    if ("role" in user) {
      console.log(` this is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(` this is ${user.name}`);
    }
  };

  const normalUser: normalUser = {
    name: "mr: normal",
  };
  const adminUser: adminUser = {
    name: "mr: normal",
    role: "admin",
  };
  const getNormalBhai = getUser(normalUser);
  console.log(getNormalBhai);
  const adminBhai = getUser(adminUser);
  console.log(adminBhai);

  //
}
