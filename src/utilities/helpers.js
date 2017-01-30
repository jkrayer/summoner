export function getXp(cr) {
  return parseInt(/\([,\d]*/g.exec(cr)[0].slice(1).replace(',', ''), 10);
}

export function partialApply(func) {
  var args = [].slice.call(arguments, 1);
  return function part() {
    func.apply(null, args.concat( [].slice.call(arguments) ));
  };
}

export function loadState() {
  try {
    const savedState = localstorage.getItem('summoner');
    if (savedState === null) {
      return undefined;
    }
    return JSON.parse(savedState);
  } catch (err) {
    console.error('Error retrieving saved state: ' + err);
    return undefined;
  }
}

export function saveState(state) {
  try {
    const saveState = JSON.stringify(state);
    localstorage.saveState('summoner', saveState);
  } catch (err) {
    console.error('Error saving state: ' + err);
  }
}
