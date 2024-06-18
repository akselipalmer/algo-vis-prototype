import { expect, test } from "vitest";
import getColor from "./getColor";

test("2 should return pink", () => {
  expect(getColor(2)).toBe("pink");
});

test("3 should return green", () => {
  expect(getColor(3)).toBe("green");
});

test("6 should return green", () => {
  expect(getColor(6)).toBe("green");
});

test("5 should return yellow", () => {
  expect(getColor(5)).toBe("yellow");
});

test("10 should return yellow", () => {
  expect(getColor(10)).toBe("yellow");
});
