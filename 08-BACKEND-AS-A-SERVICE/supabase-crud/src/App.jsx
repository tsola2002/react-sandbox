import { useEffect, useState } from 'react';
import './App.css';
import supabase from "./supabase-client";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // fetch data from the external supabase database using useEffect
  useEffect(() => {
    fetchTodos();
  }, []);

  // method to get all todos form the database
  const fetchTodos = async () => {
    // destructure the response and sql query into data and potential error 
    const { data, error } = await supabase.from("Todolist").select("*");

    // console any errors if we encounter one
    if (error) {
      console.log("Error fetching: ", error);
    } else {
      setTodoList(data);
    }
  };

  // function to add new item from form into supabase
  const addTodo = async () => {
    
    // this will genrate the object which will be inserted into the supabase
    // database
    const newTodoData = {
      name: newTodo,
      isCompleted: false,
    };

    // grab both data and error variable to see it theres any error
    const { data, error } = await supabase
      .from("Todolist")
      .insert([newTodoData])
      .single();

    if (error) {
      console.log("Error adding todo: ", error);
    } else {
      // set it to be the previous item with new data
      setTodoList((prev) => [...prev, data]);
      // set input to empty string to reset the input form
      setNewTodo("");
    }
  };

  // function to update task status
  const completeTask = async (id, isCompleted) => {
    const { data, error } = await supabase
      .from("Todolist")
      .update({ isCompleted: !isCompleted })
      .eq("id", id);

    if (error) {
      console.log("error toggling task: ", error);
    } else {
      const updatedTodoList = todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
      );
      setTodoList(updatedTodoList);
    }
  };

  const deleteTask = async (id) => {
    const { data, error } = await supabase
      .from("Todolist")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("error deleting task: ", error);
    } else {
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }
  };


  return (
    <>
    <div>
      {" "}
      <h1>Todo List</h1>
      <div>
        <input type='text' placeholder='add new todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>Add Todo Item</button>
      </div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <p> {todo.name}</p>
            <button onClick={() => completeTask(todo.id, todo.isCompleted)}>
              {" "}
              {todo.isCompleted ? "Undo" : "Complete Task"}
            </button>
            <button onClick={() => deleteTask(todo.id)}> Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
