//Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута 
//становится зелёным, если неправильное - красным.

{/* <input type="text" id="validation-input" data-length="6"
placeholder="Please enter 6 symbols"/> */}

//Для добавления стилей, используй CSS-классы valid и invalid, 
//которые мы уже добавили в исходные файлы задания.

const inputForm = document.getElementById('validation-input');

inputForm.addEventListener( 'blur', lostFocus);

function lostFocus() {
    let inputFormLength = inputForm.value.length;
    let inputDataLength = Number(inputForm.dataset.length);

    if (inputFormLength === inputDataLength) {
        inputForm.classList.remove('invalid');
        inputForm.classList.add('valid');
    }
    if (inputFormLength === 0) {
        inputForm.classList.remove('valid');
        inputForm.classList.add('invalid');
    }
     if (inputFormLength !== 0 && inputFormLength !== inputDataLength ) {
        inputForm.classList.add('invalid');
    }
};
