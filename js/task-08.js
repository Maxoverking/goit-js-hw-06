//++++Обработка отправки формы form.login-form должна быть по событию submit.
//++++При отправке формы страница не должна перезагружаться.
//Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
//что все поля должны быть заполнены.
//++++Если пользователь заполнил все поля и отправил форму, собери значения 
//полей в обьект, где имя поля будет именем свойства, 
//а значение поля - значением свойства. 
//++++Для доступа к элементам формы используй свойство elements.
//++++Выведи обьект с введенными данными в консоль и очисти значения полей формы 
//методом reset.

let form = document.querySelector('.login-form');

form.addEventListener('submit' , onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    if (input.value === '') { 
    return alert("BCE ПОЛЯ ДОЛЖНЫ БЫТЬ ЗАПОЛНЕНЫМИ !!!!!!");
    };

    const formData =  new FormData(event.currentTarget);
    
    formData.forEach((value, name) => {
      console.log(`name` , name);
      console.log(`value`, value);
})});
form.reset();

};










//=============================================================
    
    // const formElements = event.currentTarget.elements;

    // const email = formElements.email.value;
    // const password = formElements.password.value;

    // if (email === "" || password === "") {
    //     return alert ("BCE ПОЛЯ ДОЛЖНЫ БЫТЬ ЗАПОЛНЕНЫМИ !!!!!!");  
    // }
    // console.log(`Email:${email}  Password:${password}`);

    // event.currentTarget.reset();
