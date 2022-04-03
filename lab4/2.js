/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */

function isPalindrome(str) {
<<<<<<< HEAD
    return str.split('').reverse().join('');
=======

    return str == str.split('').reverse().join('');
    
>>>>>>> af7e95b9d0ec764aa2d9bf75e0eaba81cc22060f
}

module.exports = isPalindrome;
