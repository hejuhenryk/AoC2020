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
