function generateManager(data) {
  return `<div class="card" style="width: 18rem">
        <div class="card-header text-bg-primary p-3">Manager</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data.getName()}</li>
          <li class="list-group-item">ID: ${data.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto: ${data.getEmail()}">${data.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${data.getOfficeNumber()}</li>
        </ul>
      </div>`;
}

function generateEngineer(data) {
  return `<div class="card" style="width: 18rem">
        <div class="card-header text-bg-success p-3">Engineer</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data.getName()}</li>
          <li class="list-group-item">ID: ${data.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto: ${data.getEmail()}">${data.getEmail()}</a></a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${data.getGitHub()}" target="_blank">${data.getGitHub()}</a></li>
        </ul>
      </div>`;
}

function generateIntern(data) {
  return `<div class="card" style="width: 18rem">
        <div class="card-header text-bg-warning p-3">Intern</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data.getName()}</li>
          <li class="list-group-item">ID: ${data.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto: ${data.getEmail()}">${data.getEmail()}</a></a></li>
          <li class="list-group-item">School: ${data.getSchool()}</li>
        </ul>
      </div>`;
}

function generateMarkdown(data) {
  var htmlTop = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
  </head>
  <body>`;

  var cardExample = `<header>
      <div class="text-bg-light p-3 text-center bg-info">
        <h1>My Team</h1>
      </div>
    </header>
    <section class="container d-flex flex-wrap justify-content-center my-5">`;

  for (let index = 0; index < data.length; index++) {
    const newEmployee = data[index];
    if (newEmployee.getRole() === "Manager") {
      cardExample += generateManager(newEmployee);
    } else if (newEmployee.getRole() === "Engineer") {
      cardExample += generateEngineer(newEmployee);
    } else if (newEmployee.getRole() === "Intern") {
      cardExample += generateIntern(newEmployee);
    }
  }

  var htmlBottom = `</section></body>
</html>
`;

  return htmlTop + cardExample + htmlBottom;
}

module.exports = generateMarkdown;
