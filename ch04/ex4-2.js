// 4.1.1 Chaining methods together

_.chain(names)
    .filter(isValid)
    .map(s => s.replace(/_/, ' '))
    .uniq()
    .map(_.startCase)
    .sort()
    .value();
