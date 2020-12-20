fetch("../dist/src/input2.txt")
  .then((res) => res.text())
  .then((res) => res.split("\n"))
  .then((res) =>
    res.filter((input) => {
      const [range, letter, pass] = input.split(" ");
      const [min, max] = range.split("-").map((r) => +r);
      const numOfLett = includsLetter(pass, letter.slice(0, -1));
      return numOfLett >= min && numOfLett <= max;
    })
  )
  .then((res) => console.log(res.length));

const includsLetter = (password: string, letter: string): number =>
  password.split("").filter((l) => l === letter).length;
