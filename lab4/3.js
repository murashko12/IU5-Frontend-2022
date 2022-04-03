/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
<<<<<<< HEAD
=======
    
>>>>>>> af7e95b9d0ec764aa2d9bf75e0eaba81cc22060f
    str += ' '
    let str_result = str[0]
    let count = 1
    for(let i = 1; i < str.length; i++) {
        if (str[i] == str[i - 1]) {
            count++
        } else {
            if (count > 1) {
                str_result += count.toString()
            }
            count = 1
            str_result += str[i]
        }
    }
<<<<<<< HEAD
=======
    
>>>>>>> af7e95b9d0ec764aa2d9bf75e0eaba81cc22060f
    return str_result.slice(0, str_result.length - 1);
}

module.exports = rle;
