export default function getRandom(): number {
  return Number(
    (Math.random() * (1000000 - 1) + 1) * (Math.random() * (1000000 - 1) + 1)
  );
}
