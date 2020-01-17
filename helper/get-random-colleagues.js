const getRandomColleagues = (colleagues, ammount = 3) => {
	const colleaguesCopy = colleagues.slice();
	const randomColleagues = [];
	while (randomColleagues.length < ammount) {
		const randomIndex = Math.floor(Math.random() * colleaguesCopy.length);
		const colleague = colleaguesCopy[randomIndex];
		randomColleagues.push(colleague);
		colleaguesCopy.splice(randomIndex, 1);
	}

	return randomColleagues;
};

export {getRandomColleagues};
