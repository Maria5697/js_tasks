/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет", 
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    const filteredArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (filterFn(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }
    
    if (inplace) {
        array.length = 0;
        Array.prototype.push.apply(array, filteredArray);
        return array;
    }
    
    return filteredArray;
};
