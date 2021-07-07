document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // function handleClick(e){
  //   const task = document.getElementById("new-task-description").value 
  //   console.log(task)
  // }

  


  document.getElementsByClassName("submit-button")[0].addEventListener("click", function(event) {
    event.preventDefault();
    let newTask = document.getElementById("new-task-description").value
    let createTask = document.createElement("li")
    createTask.innerText = newTask
    let createButton = document.createElement("button")
    createButton.innerText = "delete"
    createButton.addEventListener("click", function(event){
      let parentLi = event.target.parentElement
      parentLi.remove()
    })
    document.getElementById("tasks").appendChild(createTask)
    createTask.appendChild(createButton)


    
  }, false);
  
  
});





