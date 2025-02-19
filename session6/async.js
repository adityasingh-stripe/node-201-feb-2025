const add = (a, b) => a + b;

const add2 = async (a, b) => {
  console.log("running in sync"); // 1st
  console.log("still running in sync"); // 2nd
  const result = await Promise.resolve(a + b);
  console.log("running async"); // 3rd
  return result;
};

console.log(add(5, 4));
add2(1, 2).then((result) => console.log(result));
console.log(add(3, 4));
