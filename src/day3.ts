fetch("../dist/src/input3.txt")
  .then((res) => res.text())
  .then((res) => res.split("\n").map((line) => line.split("").slice(0, -1)))
  .then((res) => console.log(moveTrueForest(res)));

type Cartes = [number, number];

const moveTrueForest = (forest: string[][]) => {
  console.log(forest);
  let trees = 0;
  const step: Cartes = [3, 1];
  let tobogganPos: Cartes = [0, 0];
  const path: Cartes[] = [];
  const length = forest[0].length;
  const height = forest.length;
  console.log(height, length);
  const moveTo = (position: Cartes, move: Cartes): Cartes => [
    position[0] + move[0],
    position[1] + move[1],
  ];
  while (tobogganPos[1] < height - 1) {
    tobogganPos = moveTo(tobogganPos, step);
    if (forest[tobogganPos[1]][tobogganPos[0] % length] === "#") trees++;
  }

  return trees;
};
