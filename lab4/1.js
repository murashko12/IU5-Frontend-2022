/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */

function getAnagramms(arr) {
    let key
    let obj = {}
<<<<<<< HEAD
    for (let el of Arr) {                      
        key = el.toLowerCase().split('').sort().join('');
        if (obj[key]) { // проврка на наличие значений по ключу                 
=======
    for (let el of arr) {                      
        key = el.toLowerCase().split('').sort().join('');
        if (obj[key]) {                  
>>>>>>> af7e95b9d0ec764aa2d9bf75e0eaba81cc22060f
            obj[key] = [...obj[key], el]
        } else {
            obj[key] = [el]
        }
    }
<<<<<<< HEAD
    return Object.keys(obj).map(value => obj[value])
=======
    return Object.keys(obj).map(value => obj[value]);
>>>>>>> af7e95b9d0ec764aa2d9bf75e0eaba81cc22060f
}

module.exports = getAnagramms;
