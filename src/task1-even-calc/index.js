/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    return numbers.reduce((sum, current) => {
        if (current % 2 === 0) {
            return sum + current;
        }
        return sum;
    }, 0);
};