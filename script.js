let list = document.querySelector('ul')
let searchForm = document.querySelector('.search-form input')
let addForm = document.querySelector('.add-form input')
let addBtn = document.querySelector('.add-form button')


list.addEventListener('click', (e) => {
    if(e.target.nodeName == 'BUTTON'){
        e.target.parentNode.remove()
    }
    if(list.children.length == 0){
        listEmptyMsg = document.createElement('div');
        listEmptyMsg.style.textAlign = 'center';
        listEmptyMsg.style.color = '#333';
        listEmptyMsg.innerText = 'your list is empty.';
        listEmptyMsg.id = 'emptyMsg'
        list.appendChild(listEmptyMsg)
    }
})

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!addForm.value) return;
    
    if(document.querySelector('#emptyMsg')){
        document.querySelector('#emptyMsg').remove()
    }

    list.appendChild(createListItem(addForm.value))
    addForm.value = ''
})

function createListItem(itemValue){
    let item = document.createElement('li')
    let title = document.createElement('span')
    let button = document.createElement('button')

    item.className = 'to-do-item';

    title.className = 'title';
    title.innerText = itemValue;

    button.className = 'delete-btn'
    button.innerText = 'Delete';

    item.appendChild(title)
    item.appendChild(button)

    return item
}

searchForm.addEventListener('input', (e) => {
    Array.from(list.children).forEach(element => {
        if(document.querySelector('#emptyMsg')){
            return
        }

        if(!element.querySelector('.title').innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = 'none'
        }else{
            element.style.display = 'flex'
        }
    })
})