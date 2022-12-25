const textField = document.querySelector('#consoleLog');
const userText = document.querySelectorAll('code');
const textAlert = document.querySelector('#alert');
const textPrompt = document.querySelector('#prompt');

textField.onclick = function() {
    // console.log(userText);
    alert('Метод для вывода сообщения в консоль.');
    console.log('Пример использования команды console.log')
    userText[0].textContent = 'Нажми F12 - там результат';
}

textAlert.onclick = function() {
    // console.log(userText);
    alert('Простой метод для вывода информации.');
    userText[1].textContent = 'Пример использования команды alert()';
}

textPrompt.onclick = function() {
    // console.log(userText);
    prompt('Метод для ввода информации.');
    userText[2].textContent = 'Пример использования команды prompt()';
}