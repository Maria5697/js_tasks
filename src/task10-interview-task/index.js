/**
 * Функция для решения задачи с собеседования
 * 
 * @param {number} num Входное число
 * @returns {number} Результат вычислений
 */
export const solutionFn = (num) => {
    if (num < 10) {
        return num;
    }

    let result = num;
    while (result >= 10) {
        result = String(result)
            .split('')
            .reduce((acc, digit) => acc * Number(digit), 1);
    }

    return result;
};