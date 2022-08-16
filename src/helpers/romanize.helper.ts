export function romanize(number: number): string {
  if (isNaN(number)) {
    return String(number);
  }

  let roman = "";
  let digits = String(+number).split("");
  const key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"];

  let iterator = 3;
  while (iterator--) {
    roman = (key[Number(digits.pop()) + (iterator * 10)] || "") + roman;
  }

  return Array(+digits.join("") + 1).join("M") + roman;
}
