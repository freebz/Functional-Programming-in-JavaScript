// 3.4 Reasoning about your code

// 3.4.1 Declarative and lazy function chains

const gatherStats = function (stat, country) {
    if(!isValid(stat[country])) {
	stat[country] = {'name': country, 'count': 0};
    }
    stat[country].count++;
    return stat;
};



const p5 = new Person('David', 'Hilbert', '555-55-5555');
p5.address = new Address('Germany');
p5.birthYear = 1903;

const p6 = new Person('Alan', 'Turing', '666-66-6666');
p6.address = new Address('England');
p6.birthYear = 1912;

const p7 = new Person('Stephen', 'Kleene', '777-77-7777');
p7.address = new Address('US');
p7.birthYear = 1909;
