// 3.3.3 Gathring results with _.reduce

_(persons).map(func1).reduce(func2);



const cityPath = ['address', 'city'];
const cityLens = R.lens(R.path(cityPath), R.assocPath(cityPath));


_(person).map(R.view(cityLens)).reduce(getherStats, {});


_.groupBy(persons, R.view(cityLens));



_([0,1,3,4,5]).reduce(_.add); //-> 13



([1,3,4,5]).reduce(_.divide) !== ([1,3,4,5]).reduceRight(_.divide);



const isNotValid = val => _.isUndefined(val) || _.isNull(val);

const notAllValid = args => (_(args).some(isNotValid));

notAllValid (['string', 0, null, undefined]) //-> true
notAllValid (['string', 0, {}]);             //-> false



const isValid = val => !_.isUndefined(val) && !_.isNull(val);
const allValid = args => _(args).every(isValid);

allValid(['string', 0, null]); //-> false
allValid(['string', 0, {}]);   //-> true
