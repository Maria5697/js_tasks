/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const isActive = className.endsWith('_active');
    const baseClassName = isActive ? className.slice(0, -7) : className;
    const activeClassName = baseClassName + '_active';

    const elements = document.querySelectorAll(`.${baseClassName}, .${activeClassName}`);

    if (elements.length === 0) {
        return;
    }

    elements.forEach(element => {
        if (element.classList.contains(activeClassName)) {
            element.classList.remove(activeClassName);
            element.classList.add(baseClassName);
        } else {
            element.classList.remove(baseClassName);
            element.classList.add(activeClassName);
        }
    });
};
