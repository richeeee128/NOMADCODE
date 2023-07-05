const toDoForm = document.getElementById('todo-form');
// todoform 에 있는 input 이라고 표시하지 않으면 login 할 때 input이랑 헷갈려서?
// 값이 안 나오는듯. #todo-form을 넣어주도록 하자
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

// localStorge 저장
const toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 문자열로 나타내지 않고 배열로 나타냄 JSON.stringify()

// newTodo 를 ul 에 붙여서 보여주는 역할을 함
function paintTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');

  span.innerText = newTodo;
  btn.innerText = '❌';
  btn.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}
// newTodo 생성
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

// Todo 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

console.log(savedTodos);
if (saveTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  parsedToDos.forEach();
}