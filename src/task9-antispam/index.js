/**
 * Принимает на вход текст письма и массив ключевых слов и проверяет,
 * содержится ли хотя бы одно из ключевых слов в этом тексте
 * 
 * @param {String} text Текст, проверяемый на спам
 * @param {String[]} keywords Массив ключевых слов
 * @returns {Boolean}
 */
export const isSpam = (text, keywords) => {
    
    const lowerText = text.toLowerCase();
    
    
    return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
};
