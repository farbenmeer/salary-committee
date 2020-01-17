import {getRandomColleagues} from '../helper/get-random-colleagues';

test('should return 3 random items', () => {
	const result = getRandomColleagues([1, 2, 3, 4, 5, 6]);
	expect(result.length).toBe(3);
});

test('should return 4 random items', () => {
	const result = getRandomColleagues([1, 2, 3, 4, 5, 6], 4);
	expect(result.length).toBe(4);
});

test('should return no dublicates ', () => {
	const testArray = [1, 2, 3];
	for (let i = 0; i < 1000; i++) {
		const result = getRandomColleagues(testArray);
		expect(result.length).toBe(new Set(result).size);
	}
});
