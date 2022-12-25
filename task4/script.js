const textField = document.querySelector('a');

textField.addEventListener('click', function(event){

    event.preventDefault();
    const userPrompt = prompt('Введите текст');
    textField.textContent = userPrompt;   
})
