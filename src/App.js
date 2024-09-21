import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import TodoList from "./TodoList";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(response.data);
      setFilteredTodos(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo Search App</h1>
      <SearchForm onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <TodoList todos={filteredTodos} />}
    </div>
  );
};

export default App;
