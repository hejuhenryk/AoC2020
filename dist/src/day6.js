"use strict";
fetch("../dist/inputs/input6.txt")
    .then((res) => res.text())
    .then((res) => res.split("\n"))
    .then((res) => group(res))
    .then((res) => console.log(res.reduce((p, c) => c + p, 0)));
const group = (answers) => {
    let yes = {};
    const numYes = [];
    answers.forEach((line) => {
        line = line.trim();
        if (/^\s*$/.test(line)) {
            numYes.push(Object.keys(yes).length);
            yes = {};
        }
        else if (line) {
            line.split("").forEach((letter) => yes[letter]++);
        }
    });
    numYes.push(Object.keys(yes).length);
    return numYes;
};
//# sourceMappingURL=day6.js.map