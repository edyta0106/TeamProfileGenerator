const Intern = require("../lib/intern");

describe("Create an Intern", () => {
  const intern = new Intern("Edyta", 250, "edyta0106@gmail.com", "University of Denver");

  it("Testing for Interns' name", () => {
    expect(intern.name).toBe("Edyta");
  });

  it("Testing for Intern's ID", () => {
    expect(intern.id).toEqual(expect.any(Number));
  });

  it("Testing for Intern's email", () => {
    expect(intern.email).toBe("edyta0106@gmail.com");
  });

  it("Testing for Intern's school name", () => {
    expect(intern.school).toBe("University of Denver");
  });

  it("Testing getSchool function", () => {
    expect(intern.getSchool()).toBe("University of Denver");
  });

  it("Testing the getRole function which returns Intern", () => {
    expect(intern.getRole()).toBe("Intern");
  });
});
