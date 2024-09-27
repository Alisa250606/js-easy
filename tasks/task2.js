// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let reversed = ''; 

  
  for (let i = str.length - 1; i >= 0; i--) {
    
    if (isNaN(str[i])) {
      reversed += str[i];
    }
  }

  return reversed; 
}

// Приклади використання:
console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers; // Експорт функції
