export function wait() {
  return new Promise(async (resolve) => setTimeout(resolve, 1000));
}
