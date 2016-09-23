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

    /* Nest Scores in Single Object
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
    */

    data[i].saving_throws = '';
    function setSaveString(key, val) {
      key = /^[a-z]+/.exec(key)[0];
      key = key[0].toUpperCase() + key.slice(1);
      val = val < 1 ? val : ['+', val].join('');
      return [key, val].join(' ');
    }
    for (let key in data[i]) {
      if (/_save$/.test(key)) {
        data[i].saving_throws += setSaveString(key, data[i][key]) + ' ';
        delete(data[i][key]);
      }
    }
    data[i].saving_throws = data[i].saving_throws.slice(0, -1);

  }

  write(JSON.stringify(data));
})();
