function print(number) {
  if (typeof number !== "number") {
    return "input harus berupa numbber";
  } else {
    let result = "";
    let num = 0;
    for (let i = 0; i <= number; i++) {
      for (let j = 1; j <= number; j++) {
        result += j + i + "";
        num++;
      }
      return result += "\n";
    }
  }
}
console.log(print(5));
