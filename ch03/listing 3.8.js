// Listing 3.8  Demonstrating lazy function chains with Lodash

_.chain(persons)
    .filter(isValid)
    .map(_.property('address.country'))
    .reduce(gatherStats, {})
    .values()
    .sortBy('count')
    .reverse()
    .first()
    .value()
    .name;  //-> 'US'
