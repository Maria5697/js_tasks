/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const type = typeof obj[key];
            
            if (result[type]) {
                result[type]++;
            } else {
                result[type] = 1;
            }
        }
    }

    return result;
};
