const tasks = []

const input = document.getElementById('input')
const btn = document.getElementById('btn')

document.addEventListener('DomContentLoaded', () => {
  const storeTasks = JSON.parse(localStorage.setItem('tasks'))
  if (storeTasks) {
    storeTasks.forEach((task) => {
    tasks.push(task)
    })
    
    updateTask()
    updateStates()
    
  }
})

const addTask = () => {
  const text = input.value.trim()

  if (text) {
    tasks.push({ text: text, completed: false })
    updateTask()
    updateStates()
    saveTasks()


  }
  //   console.log(tasks)
}
console.log(tasks)
const updateTask = () => {
  const taskList = document.getElementById('task-list')

  taskList.innerHTML = ''
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li')

    listItem.innerHTML = `
        <div class="taskItem">
        <div class="task ${task.completed ? 'completed' : ''}">
        
        <input type="checkbox" class="checkbox" ${
          task.completed ? 'checked' : ''
        } />
        <p>${task.text}</p>
        
        </div>
        <div class="icon">
        <img id="bin" src="./delete (1).png" onClick="delTask(${index})" />
        <img id="edit" src="./edit (1).png"  onClick = 'editTask(${index})'
 />
        

        </div>
        
        </div>
        `
    listItem.addEventListener('change', e => {
      ToggleTestComplete(index)
    })

    taskList.appendChild(listItem)
  })
}

btn.addEventListener('click', e => {
  e.preventDefault()
  // const task = input.value

  addTask()
})

const ToggleTestComplete = index => {
  tasks[index].completed = !tasks[index].completed
  updateTask()
  updateStates()
  saveTasks()


}

const delTask = index => {
  tasks.splice(index, 1)
  updateTask()
  updateStates()
  saveTasks()


}

const editTask = index => {
  const taskList = document.getElementById('input')
  taskList.value = tasks[index].text
  
  tasks.splice(index, 1);
  updateTask()
  updateStates()
  saveTasks()
}


const updateStates = () => { 

  const completeTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length
  const progress = Math.floor((completeTasks / totalTasks) * 100)
  const progressBar = document.getElementById('progress')
  progressBar.style.width = `${progress}%`

  document.getElementById('numbers').innerText = `${completeTasks} / ${totalTasks}`
  if (tasks.length && completeTasks === totalTasks) {
    balshConfetti()

  }
}

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

const balshConfetti = () => { 
  const count = 200,
  defaults = {
    origin: { y: 0.7 }
  }

function fire (particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    })
  )
}

fire(0.25, {
  spread: 26,
  startVelocity: 55
})

fire(0.2, {
  spread: 60
})

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
})

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
})

fire(0.1, {
  spread: 120,
  startVelocity: 45
})

}