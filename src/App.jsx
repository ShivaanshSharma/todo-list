import Header from './components/Header';
import Wrapper from './Wrapper';
import Form from './components/Form';
import { TodoList } from './components/TodoList';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  function updateTodos (newTodoData) {
    setTodos(prev => [...prev, newTodoData]);
  }

  function deleteTodo (todoIndex) {
    const updatedTodoAfterDeletion = todos.filter((todo) => todo.id !== todoIndex);
    setTodos(updatedTodoAfterDeletion);
  }

  return (
    <Wrapper>
      <Header />
      <Form submitHandler={updateTodos} />
      <TodoList data={todos} dltTodo={deleteTodo} />
    </Wrapper>
  )
}

export default App;