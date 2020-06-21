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


/**
 *
 * @param sideA
 * @param sideB
 * @param sideC
 * @returns {boolean}
 */
function triangleIsPossible(sideA, sideB, sideC) {
	return sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB;
}

console.log(triangleIsPossible(22, 14, 16));

/*Task 4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника,
 прямоугольника*/

/*Calculating the area of a triangle*/

/**
 *
 * @param triangleBase
 * @param triangleHeight
 * @returns {number}
 */

function calculationAreaTriangle(triangleBase, triangleHeight) {
	return triangleBase * triangleHeight / 2;
}

console.log(calculationAreaTriangle(20, 15));

/*Calculating the area of a rhombus*/

/**
 *
 * @param rhombusBaseLength
 * @param rhombusHeightLength
 * @returns {number}
 */

function calculatingAreaRhombus(rhombusBaseLength, rhombusHeightLength) {
 return rhombusBaseLength * rhombusHeightLength;
}

console.log(calculatingAreaRhombus(30, 20));

/*Calculating cylinder area*/

/**
 *
 * @param radiusOfRotation
 * @param height
 * @returns {number}
 */

function calculatingAreaCylinder(radiusOfRotation, height) {
 return 2 * Math.PI * radiusOfRotation * (height + radiusOfRotation);
}

console.log(calculatingAreaCylinder(10, 30));

/*Calculating the area of the rectangle*/

/**
 *
 * @param lengthA
 * @param lengthB
 * @returns {number}
 */

function calculatingAreaRectangle(lengthA, lengthB ) {
	return lengthA * lengthB;
}

console.log(calculatingAreaRectangle(10, 15));

