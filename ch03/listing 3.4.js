// Listing 3.4  Combining map and reduce to compute statics

const getCountry = person => person.address.country;

const getherStats = function (stat, criteria) {
    stat[criteria] = _.isUndefined(stat[criteria]) ? 1 :
	stat[criteria] + 1;
    return stat;
};

_(person).map(getCountry).reduce(getherStats, {});
