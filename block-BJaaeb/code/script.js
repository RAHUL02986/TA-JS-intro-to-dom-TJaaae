/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(labelMessage,type = "text" ){
  let label = document.createElement("label");
  let input = document.createElement("input");
  input.type = type;

  label.innerText = labelMessage;
  label.append(input);
  return label;

}



// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(labelMessage, type = "input"){
  let html = <label> ${labelMessage} <input type= "${type}"></input></label>

  return html;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(data){
  let html = `<ul>
  ${data.map((elm)=>`<li>${elm}</li>`).join("")}
  </ul>`;
  return html;
}

// TEST
// createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
// createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(data = []){
  let html = `<ul>
  ${data.map((todo)=>`  <li>
  <p>${todo.name}</p>
  <input type="checkbox" ${todo.isDone ? "checked" : ""} name="" id="">
  <span>X</span>
</li>
`).join("")}
  
  
  </ul>`
  return html;
}
// TEST
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn JS', isDone: true },
// ]);
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn React', isDone: true },
//   { name: 'Learn JS', isDone: true },
// ]);
