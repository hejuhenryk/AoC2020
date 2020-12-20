"use strict";
fetch("../dist/src/input3.txt")
    .then((res) => res.text())
    .then((res) => res
    .split("\n")
    .map((line) => line.split("").slice(0, -1))
    .slice(0, -1))
    .then((res) => console.log(moveTrueForest(res)));
const moveTrueForest = (forest) => {
    console.log(forest);
    let trees = 0;
    const move = [3, 1];
    let tobogganPos = [0, 0];
    const length = forest[0].length;
    const height = forest.length;
    console.log(forest[1 + 1][2 + 2]);
    return trees;
};
//# sourceMappingURL=day3.js.map