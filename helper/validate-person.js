const validatePerson = ({name, sex, joinedAt}) => {
	if (!name) {
		throw new Error(`There is no name set for "${{name, sex, joinedAt}}"`);
	}

	if (!sex || !(sex === 'male' || sex === 'female')) {
		throw new Error(`${name}'s sex is "${sex}". Valid is only "male" or "female", please refactor code and committee conditions if there joins a "diverse" person!`);
	}

	if (!joinedAt) {
		throw new Error(`There is no date set for "${name}"`);
	}

	if (!/(?:\d{1,2}\/){2}\d{4}/.test(joinedAt)) {
		throw new Error(`Date is invalid for "${name}". Format should be in format "mm/dd/yyyy"`);
	}
};

export {validatePerson};
