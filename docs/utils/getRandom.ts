export default function getRandom(): number {
  let primerNumero = Math.random() * (100000000000 - 1) + 1;
  let segundoNumero = Math.random() * (100000000000 - 1) + 1;
  return Number(primerNumero * segundoNumero);
}
