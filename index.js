const faker = require('faker');
const fs = require('fs');

const generateUsers = () => {
  const name = faker.name.firstName() + ' ' + faker.name.lastName();
  const counts = faker.fake("{{random.number(200)}},{{random.number(200)}},{{random.number(100)}}")
  const image = faker.image.avatar();
  const location = faker.address.city();
  return JSON.stringify({ name: name, profilephoto: image, counts: counts, location: location });
}

// generateUsers();

const writeData = (writer, callback) => {
  let i = 10000000;
  console.time("timer");
  function write() {
    let ok = true;
    do {
      i--;
      if(i === 0) {
        writer.write(generateUsers() + '\n');
        callback();
      } else {
        ok = writer.write(generateUsers() + '\n');
      }
    } while(i > 0 && ok);
    if(i > 0) {
      writer.once('drain', write);
    }
  }
  write();
  
}

const writer = fs.createWriteStream('users.txt', {encoding: 'utf8'});
writeData(writer, () => {
  console.timeEnd('timer');
  console.log('Done writing to file');
});