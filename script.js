let userFormDom = document.querySelector('#userForm');
userFormDom.addEventListener('submit', formHandler);

const alertDOM = document.querySelector('#alert');

const alertFunc = (title,message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}!</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

`;

function formHandler(event){
    event.preventDefault();
    const USER_NAME = document.querySelector('#username');
    const SCORE = document.querySelector('#score');
    if(USER_NAME.value && SCORE.value)
    {
        addItem(USER_NAME.value, SCORE.value);
        USER_NAME.value = "";
        
        SCORE.value = "";
    } else {
        alertDOM.innerHTML = alertFunc("Uyarı","Görev alanı boş geçilemez.","danger");
    }
    
}

let userListDOM = document.querySelector('#userList');
let numId = 0;

const addItem = (userName, score) => {
    let li = document.createElement('li');
    li.innerHTML = `
        <div class="ms-2 me-auto">
            ${userName}
        </div>
        <span class="badge bg-primary rounded-pill">${score}</span>
        <div class="input-group-append">
            <button class="btn btn-danger btn-sm deleteBtn" type="button" onClick="deleteItem(${numId})">-</button>
        </div>
    `;
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
    li.setAttribute('id', numId);
    userListDOM.append(li);
    numId++;
}

function deleteItem(numId){
    const item = document.getElementById(numId);
    item.remove();
}