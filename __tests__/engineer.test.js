const Engineer = require("../lib/engineer");

describe("Create an Engineer", () => {
  const engineer = new Engineer("Edyta", 101, "edyta0106@gmail.com", "edyta0106");

  it("Testing for Engineer's name", () => {
    expect(engineer.name).toBe("Edyta");
  });

  it("Testing for Engineer's ID", () => {
    expect(engineer.id).toEqual(expect.any(Number));
  });

  it("Testing for Engineer's email", () => {
    expect(engineer.email).toBe("edyta0106@gmail.com");
  });

  it("Testing for Egineer's github username", () => {
    expect(engineer.github).toBe("edyta0106");
  });

  it("Testing getGitHub function", () => {
    expect(engineer.getGitHub()).toBe("edyta0106");
  });

  it("Testing the getRole function which returns Engineer", () => {
    expect(engineer.getRole()).toBe("Engineer");
  });
});
