const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createCursos(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const titulo = faker.name.titulo();
    const descripcion = faker.name.descripcion();
    const disertante = faker.internet.disertante();

    result.push({
      id: faker.random.uuid(),
      titulo,
      descripcion,
      disertante,
    });
  }

  return result;
}

function main() {
  const data = {
    cursos: createCursos(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();