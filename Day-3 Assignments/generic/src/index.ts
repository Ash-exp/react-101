function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));
console.log(createPair<number, number>(32, 42));
console.log(createPair<string, boolean>('hello', true));
