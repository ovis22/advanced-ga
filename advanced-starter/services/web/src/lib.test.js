import { describe, it, expect } from "vitest";
import { formatVersion, sum } from "./lib.js";

describe("web lib", () => {
  it("formatVersion zwraca dev dla pustej wartości", () => {
    expect(formatVersion("")).toBe("dev");
    expect(formatVersion("   ")).toBe("dev");
  });

  it("formatVersion przycina białe znaki", () => {
    expect(formatVersion("  1.2.3 ")).toBe("1.2.3");
  });

  it("sum sumuje listę", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([])).toBe(0);
  });
});
