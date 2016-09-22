const data = require('./5e-SRD-Monsters');
var fs = require('fs');

function write(str) {
  fs.writeFile("test.js", str, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

(function() {
  var count = data.length;

  for (let i = 0; i < count; i++) {
    if (!data[i].strength) { continue; }
    data[i].scores = {
      strength: data[i].strength,
      dexterity: data[i].dexterity,
      constitution: data[i].constitution,
      intelligence: data[i].intelligence,
      wisdom: data[i].wisdom,
      charisma: data[i].charisma
    };
    delete(data[i].strength);
    delete(data[i].dexterity);
    delete(data[i].constitution);
    delete(data[i].intelligence);
    delete(data[i].wisdom);
    delete(data[i].charisma);
  }

  write(JSON.stringify(data));
})();
