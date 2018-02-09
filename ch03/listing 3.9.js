// Listing 3.9  Writing SQL-like JavaScript

_.from(persons)
    .where(p => p.birthYear > 1900 && p.address.country !== 'US')
    .groupBy(['firstname', 'birthYear'])
    .select('firstname', 'birthYear')
    .value();

//-> ['Alan', 'Barkley', 'John']
