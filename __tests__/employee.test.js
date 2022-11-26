const Employee = require("../lib/employee");

describe("Create an Employee", () => {
  const employee = new Employee("Edyta", 101, "edyta0106@gmail.com");

  it("Testing for Employees name", () => {
    expect(employee.name).toBe("Edyta");
  });

  it("Testing for Employee ID as a number", () => {
    expect(employee.id).toEqual(expect.any(Number));
  });

  it("Testing for Employee email", () => {
    expect(employee.email).toBe("edyta0106@gmail.com");
  });

  it("Testing getName function", () => {
    expect(employee.getName()).toBe("Edyta");
  });

  it("Testing getId function", () => {
    expect(employee.getId()).toEqual(expect.any(Number));
  });

  it("Testing getEmail function", () => {
    expect(employee.getEmail()).toBe("edyta0106@gmail.com");
  });

  it("Testing getRole function which returns Employee", () => {
    expect(employee.getRole()).toBe("Employee");
  });
});
