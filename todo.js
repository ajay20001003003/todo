let todoList ;
 
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  
  todoList=JSON.parse(localStorage.getItem('userdetails'))??[];
  console.log(todoList);
  todoList.push({
    'item':todoItem,
    'dueDate':todoDate
  })
  localStorage.setItem("userdetails",JSON.stringify(todoList));
  console.log(todoList);


  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}
function removefun(index){
    todoList=JSON.parse(localStorage.getItem('userdetails'))??[];
    todoList.splice(index,1);
      localStorage.setItem("userdetails",JSON.stringify(todoList));
      displayItems();


}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
   todoList=JSON.parse(localStorage.getItem('userdetails'))??[];




  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];


    // newHtml += `
    //   <span>${item}</span>
    //   <span>${dueDate}</span>
    //    <button class='btn-delete' onclick="todoList.splice(${i}, 1);
    //   displayItems();">Delete</button>
    // `;
     newHtml += `
    <span>${item}</span>
     <span>${dueDate}</span>
     <button class='btn-delete' onclick="removefun(${i})";
    displayItems();">Delete</button>
   `;


   
  }
    localStorage.setItem("userdetails",JSON.stringify(todoList));
  containerElement.innerHTML = newHtml;

}
