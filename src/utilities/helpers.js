function getXp(cr) {
  return parseInt(/\([,\d]*/g.exec(cr)[0].slice(1).replace(',', ''), 10);
}

function partialApply(func, index) {
  return function part() {
    func(index);
  };
}

export default {
  getXp,
  partialApply
};
