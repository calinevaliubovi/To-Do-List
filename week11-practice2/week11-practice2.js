const input = document.getElementById('input');
const ul = document.getElementById('ul');
const button = document.getElementById('button');
let arr = [];

function createTask(){
  const textInput = input.value;
  let newLi = document.createElement('li');
  newLi.textContent = textInput;
  for(let i = 0; i < arr.length; i++)(
    arr[i] = newLi
  )
  ul.append(newLi);
  input.value = '';
}
button.addEventListener('click', createTask);

function checkTask(e){
    e.target.classList.toggle('text-decoration');
}
ul.addEventListener('click', checkTask);
