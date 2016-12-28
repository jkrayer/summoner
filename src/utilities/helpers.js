function getXp(cr) {
  return parseInt(/\([,\d]*/g.exec(cr)[0].slice(1).replace(',', ''), 10);
}

function partialApply(func) {
  var args = [].slice.call(arguments, 1);
  return function part() {
    func.apply(null, args.concat( [].slice.call(arguments) ));
  };
}

export default {
  getXp,
  partialApply
};
