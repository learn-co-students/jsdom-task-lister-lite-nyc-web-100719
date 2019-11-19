
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let tasks = document.querySelector("#tasks")
  let submit = document.getElementById("button")

  submit.addEventListener("click", function(e){

  let form = submit.parentNode
  let newTask= form.querySelector("#new-task-description").value
    
  let li= document.createElement("li")

  li.innerText = newTask

  function deleteTask(e){
    let li = del.parentNode 
    li.remove()
  }

  let del = document.createElement("button")
    del.className= "delete"
    del.innerText = "delete"

  del.addEventListener("click", deleteTask)
   
  li.append(del)
  tasks.append(li)
  e.preventDefault()
  })



});



