document.addEventListener("DOMContentLoaded", () => {

let newTask = document.querySelector("#new-task-description")

let taskForm = document.querySelector("#create-task-form")
taskForm.addEventListener("submit", function(e){
  e.preventDefault()
  let newTask = document.querySelector("#new-task-description")
  let taskDiv = document.querySelector("#tasks")
  let taskLi = document.createElement("li")
  taskLi.innerText = newTask.value
  taskDiv.append(taskLi)
})

});
