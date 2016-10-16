function partialApply(func, index) {
  return function part() {
    func(index);
  };
}

export default {
  partialApply
};
