import { marques } from "../dist/js/conf.js";

describe("Marques", function () {
  it("should be Map", function () {
    expect(marques).toBeInstanceOf(Map);
  });
});
