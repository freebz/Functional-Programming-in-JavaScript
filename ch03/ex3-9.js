// 3.4.2 SQL-like data: functions as data

SELECT p.firstname, p.birthYear FROM Person p
WHERE p.birthYear > 1903 and p.country IS NOT 'US'
GROUP BY p.firstname, p.birthYear



_.mixin({'select':  _.pluck,
	 'from':    _.chain,
	 'where':   _.filter,
	 'groupBy': _.sortByOrder});
