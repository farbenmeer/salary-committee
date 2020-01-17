import {isValidCommittee} from '../helper/is-valid-committee';

describe('should return false', () => {
	test('only male colleagues', () => {
		const colleagues = [
			{name: 'XYZ', sex: 'male', joinedAt: '04/01/2010'},
			{name: 'XYZ', sex: 'male', joinedAt: '01/01/2010'},
			{name: 'XYZ', sex: 'male', joinedAt: '04/01/2010'}
		];

		const result = isValidCommittee(colleagues);
		expect(result).toBeFalsy();
	});

	test('only female colleagues', () => {
		const colleagues = [
			{name: 'XYZ', sex: 'female', joinedAt: '04/01/2010'},
			{name: 'XYZ', sex: 'female', joinedAt: '01/01/2010'},
			{name: 'XYZ', sex: 'female', joinedAt: '04/01/2010'}
		];

		const result = isValidCommittee(colleagues);
		expect(result).toBeFalsy();
	});

	test('only fresh colleagues', () => {
		const dateNow = new Date();
		const joinedAt = dateNow.toLocaleString('en-US').split(',')[0];

		const colleagues = [
			{name: 'XYZ', sex: 'male', joinedAt},
			{name: 'XYZ', sex: 'female', joinedAt},
			{name: 'XYZ', sex: 'female', joinedAt}
		];

		const result = isValidCommittee(colleagues);
		expect(result).toBeFalsy();
	});

	test('not only longTermColleagues', () => {
		const colleagues = [
			{name: 'XYZ', sex: 'male', joinedAt: '04/01/2010'},
			{name: 'XYZ', sex: 'female', joinedAt: '04/01/2010'},
			{name: 'XYZ', sex: 'female', joinedAt: '04/01/2999'}
		];

		const result = isValidCommittee(colleagues, 2, 1, 3);
		expect(result).toBeFalsy();
	});
});

describe('should return true', () => {
	const colleagues = [
		{name: 'XYZ', sex: 'male', joinedAt: '04/01/2010'},
		{name: 'XYZ', sex: 'male', joinedAt: '01/01/2010'},
		{name: 'XYZ', sex: 'male', joinedAt: '04/01/2010'},
		{name: 'XYZ', sex: 'female', joinedAt: '04/01/2010'},
		{name: 'XYZ', sex: 'female', joinedAt: '04/01/2010'},
		{name: 'XYZ', sex: 'female', joinedAt: '04/01/2010'}
	];
	test('for min. 1 female, min. 1 male, min. 1 longTermColleague', () => {
		const result = isValidCommittee(colleagues);
		expect(result).toBeTruthy();
	});
	test('for min. 2 female, min. 0 male, min. 3 longTermColleague', () => {
		const result = isValidCommittee(colleagues, 2, 0, 3);
		expect(result).toBeTruthy();
	});
	test('for min. 3 female, min. 3 male, min. 6 longTermColleague', () => {
		const result = isValidCommittee(colleagues, 2, 0, 3);
		expect(result).toBeTruthy();
	});
});
