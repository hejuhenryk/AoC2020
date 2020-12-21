fetch("../dist/src/input4.txt")
  .then((res) => res.text())
  .then((res) => res.split("\n"))
  .then((res) => readDocs(res))
  .then((res) => console.log(countValidPass(res)));

const readDocs = (docs: string[]) => {
  const unSortedDocs: { [k: string]: string }[] = [];
  let doc: { [k: string]: string } = {};
  docs.forEach((d) => {
    if (d.length > 2) {
      d.split(" ").forEach((info) => {
        const [key, value] = info.split(":");
        doc[key] = value;
      });
    } else {
      unSortedDocs.push({ ...doc });
      doc = {};
    }
  });

  unSortedDocs.push({ ...doc });
  return unSortedDocs;
};

const countValidPass = (unsortedDocs: { [k: string]: string }[]) => {
  return unsortedDocs.filter(
    (d) => d.byr && d.iyr && d.eyr && d.hgt && d.hcl && d.ecl && d.pid
  ).length;
};
const countValidPass2 = (unsortedDocs: { [k: string]: string }[]) => {
  const byrV = (v: string) => +v >= 1920 && +v <= 2002;
  const iyrV = (v: string) => +v >= 2010 && +v <= 2020;
  const eyrV = (v: string) => +v >= 2020 && +v <= 2030;
  const hgtV = (v: string) =>
    v.slice(-2, v.length) === "cm"
      ? +v.slice(0, -2) >= 150 && +v.slice(0, -2) <= 193
      : v.slice(-2, v.length) === "in"
      ? +v.slice(0, -2) >= 59 && +v.slice(0, -2) <= 76
      : false;
  //   const hclV = (v: string) => +v >= 1920 && +v <= 2002  (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  const eclV = (v: string) =>
    v ===
    ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].find((c) => c === v);
  // const pidV = (v: string) => v   (Passport ID) - a nine-digit number, including leading zeroes.
  return unsortedDocs.filter(
    (d) => d.byr && d.iyr && d.eyr && d.hgt && d.hcl && d.ecl && d.pid
  ).length;
};
2;
