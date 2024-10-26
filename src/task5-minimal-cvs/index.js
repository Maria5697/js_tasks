/**
 * Создает минимальную систему контроля версий для массива
 * 
 * @param {Array} initialArray Начальный массив
 * @returns {Object} Объект с методами head, history, push и pop
 */
export const getMinimalCVS = (initialArray) => {
    let versions = [initialArray.slice()];

    return {
        head: () => versions[versions.length - 1].slice(),

        history: () => versions.map(version => version.slice()),

        push: (element) => {
            const newVersion = versions[versions.length - 1].slice();
            newVersion.push(element);
            versions.push(newVersion);
        },

        pop: () => {
            if (versions[versions.length - 1].length === 0) {
                return undefined;
            }
            const newVersion = versions[versions.length - 1].slice(0, -1);
            const poppedElement = versions[versions.length - 1][versions[versions.length - 1].length - 1];
            versions.push(newVersion);
            return poppedElement;
        }
    };
};
