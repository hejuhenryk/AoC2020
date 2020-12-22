fetch("../dist/src/input5.txt")
  .then((res) => res.text())
  .then((res) => console.log(res.split("\n"))