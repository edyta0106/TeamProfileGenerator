function getGitHub(github) {
  return `[GitHub](https://github.com/${github})`;
}

function generateMarkdown(data) {
  var htmlTop = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
  </head>
  <body>`;
  var cardExample = `<header>
      <div class="text-bg-light p-3 text-center">
        <h1>My Team</h1>
      </div>
    </header>
    <section class="container d-flex flex-wrap justify-content-center my-5 ">
      <div class="card" style="width: 18rem">
        <div class="card-header text-bg-primary p-3">Manager</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">Office Number: ${data.officeNumber}</li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-header text-bg-success p-3">Engineer</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">GitHub: <a href="${getGitHub(data.github)}" target="_blank"></a></li>
        </ul>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-header text-bg-warning p-3">Intern</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">School: ${data.school}</li>
        </ul>
      </div>
    </section>`;
  var htmlBottom = `</body>
</html>
`;
  //create for loop for data input to generate card per obj in the array

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }

  return htmlTop + cardExample + htmlBottom;
}

module.exports = generateMarkdown;
