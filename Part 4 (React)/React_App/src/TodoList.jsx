import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //to generate unique id for each list items(first install uuid by npm install uuid)

// Activity practice on state variable

export default function TodoList() {
  //todos array te all tasks are going to be stored and it will be updated when the add button will be clicked
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]); //created array of objects
  let [newTodo, setNewTodo] = useState(""); // newTodo will be updated when input will be updated

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo(""); //reseting the newTodo value
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value); //new value enter korlei re-rendering trigger korbe
  };

  //filter method returns a copy of the array by maintaining the condition
  //here in setTodos we can use call back and new value is dependent on old value

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  //Updating array (all values) (update er jonno map use kora recommended)
  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  // updating one item(not all item)

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          // j id er sathe milbe otar update kore dibe
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          //otherwise same todo return korbe
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />

      <h2>Task Todo</h2>
      {/* uuidv4() will generate unique id for each list item (this key will help to delete or access any specific item from the list)*/}
      {/* &nbsp is used to provide some space between two components */}
      {/* onClick a arrow function diye todo.id pass korle function click korar agei run korbena */}
      {/* React er vitore array theke kono kisu delete korte filter method use korbo */}
      {/* Kisu render korate hole always map method use korbo */}
      {/* Updating arrays in state(read in react.dev documentation) */}

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => upperCaseOne(todo.id)}>
                UpperCaseOne
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
}
