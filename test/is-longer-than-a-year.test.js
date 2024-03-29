import {isLongerThanAYear} from '../helper/is-longer-than-a-year.js';

test('should return false for today', () => {
	const dateNow = new Date();
	const dateString = dateNow.toLocaleString('en-US').split(',')[0];

	const result = isLongerThanAYear(dateString);
	expect(result).toBeFalsy();
});

test('should return false for date in future', () => {
	const result = isLongerThanAYear('01/01/2999');
	expect(result).toBeFalsy();
});

test('should return true for date exact a year ago', () => {
	const dateAYearAgo = new Date();
	dateAYearAgo.setFullYear(dateAYearAgo.getFullYear() - 1);
	const dateString = dateAYearAgo.toLocaleString('en-US').split(',')[0];

	const result = isLongerThanAYear(dateString);
	expect(result).toBeTruthy();
});

test('should return true for date more then a year ago', () => {
	const dateAYearAgo = new Date();
	dateAYearAgo.setFullYear(dateAYearAgo.getFullYear() - 2);
	const dateString = dateAYearAgo.toLocaleString('en-US').split(',')[0];

	const result = isLongerThanAYear(dateString);
	expect(result).toBeTruthy();
});
