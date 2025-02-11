import React from 'react'

export const TodoList = ({data, dltTodo}) => {

  const todoDltHandler = (index) => {
    dltTodo(index);
  }
    
  return (
    <ul id='main-list'>
        {data.map((item) => <li key={item.id} className='each-todo'>
            <span className='title-size'>{item.title}</span>
            <span className='title-desc'>{item.Desc}</span>
            <span className='dlt-btn-span'><button onClick={() => todoDltHandler(item.id)} className='dlt-btn'>Delete</button></span>
        </li>)}
    </ul>
  )
}
