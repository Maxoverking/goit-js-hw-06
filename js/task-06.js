//Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута 
//становится зелёным, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid, 
//которые мы уже добавили в исходные файлы задания.

{/* <input type="text" id="validation-input" data-length="6"
placeholder="Please enter 6 symbols"/> */}

//Для добавления стилей, используй CSS-классы valid и invalid, 
//которые мы уже добавили в исходные файлы задания.

let inputForm = document.getElementById('validation-input');
console.log("inputForm", inputForm);

let inputLength = inputForm.getAttribute('data-length');
console.log("inputValue", inputLength);

let inputLengthNum = parseInt(inputLength, 10);
console.log("inputLengthNum", inputLengthNum);

inputForm.oninput = function() {
    if (inputForm.value.length === inputLengthNum) {
        inputForm.classList.remove('invalid');
        inputForm.classList.add('valid');
    }
    if (inputForm.value.length === 0) {
        inputForm.classList.remove('valid');
        inputForm.classList.add('invalid');
    }
     if (inputForm.value.length !== 0 && inputForm.value.length !== inputLengthNum ) {
        inputForm.classList.add('invalid');
    }
};

