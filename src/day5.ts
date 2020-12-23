fetch("../dist/src/input5.txt")
  .then((res) => res.text())
  .then((res) => res.split("\n"))
  .then((res) => res.map((code) => readCode(code)))
  .then((res) => res.reduce((pre, cur) => (pre > cur ? pre : cur), 0))
  .then((res) => console.log(res));

const readCode = (code: string) => {
  const row = code.slice(0, 7);
  const colum = code.slice(-3);
  return (
    parseInt(row.replace(/[B]/g, "1").replace(/[F]/g, "0"), 2) * 8 +
    parseInt(colum.replace(/[L]/g, "0").replace(/[R]/g, "1"), 2)
  );
};
