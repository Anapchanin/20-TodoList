
const tasks = [
    { task: 'Выучить стих'},
    { task: 'Вынести мусор'},
    // Сделать уроки
    // Помочь с уборкой маме
]

let inputSearch = document.querySelector('#input-form')
let inputBtn = document.querySelector('#input-btn')

const completedTask = (h3) =>{
    let textdec = h3.style.textDecoration;
    h3.style.textDecoration = textdec === 'none' ? 'line-though' : 'none'
    let c = 77 === 77 ? 77 : 777
    //let b = 0
    //if(77 === 77)
    //{
    //    b = 77
    //}
    //else
    //{
    //    b = 777
    //}
}

const deleteTask = (li) =>{
    li.remove()
}

const createTask = (tasks) =>{
    let li = document.createElement('li')
    let h3 = document.createElement('h3')
    let btn = document.createElement('button')

    li.className = 'task'
    h3.setAttribute('id', 'task-text')
    btn.setAttribute('id', 'task-btn')

    h3.style.textDecoration = 'none'
    h3.addEventListener ('click', () => completedTask(h3))
    btn.addEventListener ('click', () => deleteTask(li))

    h3.innerText = tasks
    btn.innerText = "X"

    li.append(h3,btn)
    return li
}

const getStartlist = (tasks) =>{
    let tasklist = document.querySelector('#taskList')
    const liElements = tasks.map((currenttask)=>{
        let li = createTask(currenttask.task)
        return li
    })

    tasklist = tasklist.append(...liElements)
}

const createTasks = (value) =>{
    let tasklist = document.querySelector('#tasksList')
    tasklist.prepend(createTask(value));
}

inputBtn.addEventListener('click', (e) =>{
    if(inputSearch.value !='')
    {
        createTasks(inputSearch.value)
        inputSearch.value =''
    }
})

inputSearch.addEventListener("keydown" , (e) =>{
    if(e.key === 'Enter' && inputSearch.value !== '')
    {
        createTasks(inputSearch.value)
        inputSearch.value= ''
    }
});