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

const skillArr = ['acrobatics', 'animal handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight of hand', 'stealth', 'survival'];

const crMap = {
  "0": "(10 XP)",
  "1/8": "(25 XP)",
  "1/4": "(50 XP)",
  "1/2": "(100 XP)",
  "1": "(200 XP)",
  "2": "(450 XP)",
  "3": "(700 XP)",
  "4": "(1,100 XP)",
  "5": "(1,800 XP)",
  "6": "(2,300 XP)",
  "7": "(2,900 XP)",
  "8": "(3,900 XP)",
  "9": "(5,000 XP)",
  "10": "(5,900 XP)",
  "11": "(7,200 XP)",
  "12": "(8,400 XP)",
  "13": "(10,000 XP)",
  "14": "(11,500 XP)",
  "15": "(13,000 XP)",
  "16": "(15,000 XP)",
  "17": "(18,000 XP)",
  "18": "(20,000 XP)",
  "19": "(22,000 XP)",
  "20": "(25,000 XP)",
  "21": "(33,000 XP)",
  "22": "(41,000 XP)",
  "23": "(50,000 XP)",
  "24": "(62,000 XP)",
  "30": "(155,000 XP)"
};

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

    /*
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
    */

    /*
    data[i].skills = '';
    function setSkillString(key, val) {
      key = key[0].toUpperCase() + key.slice(1);
      val = val < 1 ? val : ['+', val].join('');
      return [key, val].join(' ');
    }
    for (let key in data[i]) {
      if (skillArr.indexOf(key) > -1) {
        data[i].skills += setSkillString(key, data[i][key]) + ' ';
        delete(data[i][key]);
      }
    }
    data[i].skills = data[i].skills.slice(0, -1);
    */

//   data[i].challenge_rating += ' ' + crMap[data[i].challenge_rating];

    //temp index so I don't have to search twice
    data[i].arrayIndex = i;
  }

  write(JSON.stringify(data));
})();
