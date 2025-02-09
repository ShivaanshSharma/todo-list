import React from 'react'

export const TodoList = ({data}) => {
    
  return (
    <ul id='main-list'>
        {data.map((item) => <li className='each-todo'>
            <span className='title-size'>{item.title}</span>
            <span className='title-desc'>{item.Desc}</span>
            <span className='dlt-btn-span'><button className='dlt-btn'>Delete</button></span>
        </li>)}
    </ul>
  )
}
