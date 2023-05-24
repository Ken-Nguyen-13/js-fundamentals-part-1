let arr = [
  `a`,
  `b`,
  `c`,
  `d`,
  `e`,
  `f`,
  `g`,
  `h`,
  `i`,
  `j`,
  `k`,
  `l`,
  `m`,
  `n`,
  `o`,
  `p`,
  `q`,
  `r`,
  `s`,
  `t`,
  `u`,
  `v`,
  `w`,
  `x`,
  `y`,
  `z`,
];
let combinations = 0;
for (let a = 0; a <= arr.length - 1; a++) {
  //console.log(`Start of ${arr[a].toUpperCase()} Section.`);
  for (let b = 0; b <= arr.length - 1; b++) {
    //console.log(
    //   `Start of ${arr[a].toUpperCase()}${arr[b].toUpperCase()} Section.`
    // );
    for (let c = 0; c <= arr.length - 1; c++) {
      console.log(arr[a], arr[b], arr[c]);
      combinations++;
    }
    // console.log(
    //  `End of ${arr[a].toUpperCase()}${arr[b].toUpperCase()} Section.`
    // );
  }
  //console.log(`End of ${arr[a].toUpperCase()} Section.`);
}
console.log(combinations);
