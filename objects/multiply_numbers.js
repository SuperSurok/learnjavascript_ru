// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

const multiplyNumeric = (menu) => {
    for (let item in menu) {
        if (typeof menu[item] === 'number') {
            menu[item] *= 2;
        }
    }
};

const menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

multiplyNumeric(menu);

console.log(menu);