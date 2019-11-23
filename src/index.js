document.addEventListener("DOMContentLoaded", () => {

//first grab that element I will need
// --> I selected form that I selected the "submit" of that form to be the event
//then I will add a listener for it 
  const submitForm = document.getElementById("create-task-form")

  submitForm.addEventListener ("submit", function(e) {
    e.preventDefault()
    addToDo()
  });


  //grabbing the typed task entered by user 
  function addToDo() {
    const taskString = document.getElementById("new-task-description").value
    const newLi = document.createElement("li")
    newLi.innerText = taskString
    const existingUl = document.getElementById("tasks")
    existingUl.append(newLi)
  }

});



// document.querySelector("#id-create-task-form").addEventListener("click", function(event) {
//   document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
//   event.preventDefault();
// }, false);


// const submitForm = document.getElementById("create-task-form")
// console.log(submitForm)