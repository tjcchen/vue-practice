import { check, currentAuth } from "./auth";

describe("empty auth", () => {
  it("empty auth", () => {
    // Empty current auth, array.splice() will insert or delete array elements
    currentAuth.splice(0, currentAuth.length);

    expect(check(["user"])).toEqual(false);
  });

  it("user auth", () => {
    currentAuth.splice(0, currentAuth.length);
    currentAuth.push("user");

    expect(check(["user"])).toEqual(true);
    expect(check(["admin"])).toEqual(false);
  });

  it("admin auth", () => {
    // Unit test will utilize previous test cases' value
    // Currently, the value of currentAuth equals to ["user"]
    currentAuth.push("admin");

    expect(check(["user"])).toEqual(true);
    expect(check(["admin"])).toEqual(true);
    expect(check(["user", "admin"])).toEqual(true);
  });
});
