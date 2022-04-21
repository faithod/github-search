import { formatName } from "../formatName";

test("formatName returns the repository name in lowercase", () => {
  expect(formatName("PERN-to-do-app")).toBeDefined();
  expect(formatName("PERN-to-do-app")).toStrictEqual("pern-to-do-app");
  expect(formatName("Tetris-app")).toStrictEqual("tetris-app");
  expect(formatName("COUNTER")).toStrictEqual("counter");
  expect(formatName("counter")).toStrictEqual("counter");
});
