let name2: string = "qaSim ali";
        let upper = name2.toUpperCase();
console.log(upper);

console.log(name2.toLowerCase());

let newName = name2
  .toLowerCase()
  .split(" ")
  .map((l: string) => l[0].toUpperCase() + l.substr(1))
  .join(" ");
console.log(newName);

