export default function getRandom(): number {
  return Number(
    (Math.random() * (100000000000 - 1) + 1) *
      (Math.random() * (100000000000 - 1) + 1)
  );
}
