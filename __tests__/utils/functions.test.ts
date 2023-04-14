import "@testing-library/jest-dom";

import { toMinSec } from "@/utils/functions";

describe("use cases for toMinSec method", () => {
   test("must return string format mm:ss", () => {
    const result = toMinSec(120000)
    expect(result).toBe('2:00')
  });

  test("120000 ms is expect to return 2:00", () => {
    const a = toMinSec(120000)
    expect(a).toBe('2:00')
  });

  test("150000 ms is expect to return 2:30", () => {
    const a = toMinSec(150000)
    expect(a).toBe('2:30')
  });

  test("123000  ms is expect to return 2:03", () => {
    const a = toMinSec(123000)
    expect(a).toBe('2:03')
  });
});
