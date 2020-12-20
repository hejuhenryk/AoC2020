fetch("../dist/src/input3.txt")
  .then((res) => res.text())
  .then((res) =>
    res
      .split("\n")
      .map((line) => line.split("").slice(0, -1))
      .slice(0, -1)
  )
  .then((res) => console.log(moveTrueForest(res)));

const moveTrueForest = (forest: string[][]) => {
  console.log(forest);
  let trees = 0;
  const move = [3, 1];
  let tobogganPos = [0, 0];
  const length = forest[0].length;
  const height = forest.length;
  const move = (position: [number, number], move: [number, number]) => [
    position[1] + move[1],
    position[0] + move[0],
  ];
  console.log(forest[0 + 1][0 + 3]);
  console.log(forest[0 + 1][0 + 3]);

  return trees;
};
