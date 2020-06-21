/*Task 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:*/

/**
 *
 * @type {string}
 */

const age = prompt('Enter your age, please.');

function isAdult() {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}

console.log(isAdult());

/*Task 2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:*/

/**
 *
 * @param a
 * @param b
 * @returns {boolean}
 */
function checkMultiplicity(a, b) {
	if (a % b === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(checkMultiplicity(22, 5));

/*Task 3. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция
 возвращает true если треугольник возможен и false если нет.*/

function triangleIsPossible(sideA, sideB, sideC) {
	return sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB;
}

console.log(triangleIsPossible(22, 14, 16));

