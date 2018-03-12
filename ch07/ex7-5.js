// 7.2.2 Taking advantage of shortcut fusion

_.chain([p1, p2, p3, p4, p5, p6, p7])
    .filter(isValid)
    .map(_.property('address.country')).reduce(gatherStates, {})
    .values()
    .sortBy('count')
    .reverse()
    .first()
    .value()



square = R.compose(R.tap(() => trace('Mapping')), square);
isEven = R.compose(R.tap(() => trace('then filtering')), isEven);
