"use strict";
fetch("../dist/src/input4.txt")
    .then((res) => res.text())
    .then((res) => res.split("\n"))
    .then((res) => console.log(res));
//# sourceMappingURL=day4.js.map