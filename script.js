const form = document.querySelector('.form.js--form')
const formBtn = document.querySelector('.form__btn')
const ulWrapper = document.querySelector('.js--todos-wrapper')
const deleteBtn = document.querySelector('.todo-item__delete');



formBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const formInput = form.querySelector('input')
    if (formInput.value.trim()) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const span = document.createElement('span');
        span.classList.add('todo-item__description');
        span.textContent = formInput.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.classList.add('todo-item__delete')


        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        ulWrapper.appendChild(li);


        formInput.value = '';
    }
})



ulWrapper.addEventListener('click', function (event) {
    if (event.target.classList.contains('todo-item__delete')) {
        event.target.closest('li').remove();
    }
    if (event.target.type === 'checkbox') {
        event.target.closest('li').classList.toggle('todo-item--checked')
    }
})


