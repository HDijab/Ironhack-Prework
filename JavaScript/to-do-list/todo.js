
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var input = document.getElementById('todo-input').value;
    if(input === "") {
      alert("You didn't enter anything!");
      return;
    }
    var listitem = document.createElement('li');
    var list = document.getElementsByClassName('todo-list-items')[0];
    listitem.textContent = input;
    list.appendChild(listitem);
    document.getElementById('todo-input').value = "";
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
    var done = document.querySelector('.todo-list-items li');
    if(done === null) {
      alert("There is nothing left to do!");
      return;
    }
    var donelist = document.querySelector('.done-list-items');
    donelist.appendChild(done);
    done.classList.toggle('done');
  }
  
};
