const Manager = require("../lib/manager");

describe("Create a Manager", () => {
  const manager = new Manager("Edyta", 101, "edyta0106@gmail.com", 200);

  it("Testing for Manager's name", () => {
    expect(manager.name).toBe("Edyta");
  });

  it("Testing for Manager's ID", () => {
    expect(manager.id).toEqual(expect.any(Number));
  });

  it("Testing for Manger's email", () => {
    expect(manager.email).toBe("edyta0106@gmail.com");
  });

  it("Testing for Manager's office number", () => {
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  it("Testing for getOfficeNumber function", () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
  });

  it("Testing the getRole function which returns Manager", () => {
    expect(manager.getRole()).toBe("Manager");
  });
});
