/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { DsaStyle } from './style'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/TodoList/action'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TodoList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector((data) => data.SignUpReducer)
  const todoAppList = useSelector((data) => data.aTask)
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editIndex, setEditIndex] = useState(undefined)

  const todo = data?.findIndex((list) => list.email && list.password) > -1
  useEffect(() => {
    if (todo) {
      navigate('/todolist')
    } else {
      navigate('/')
    }
  }, [])

  const handleSubmit = (e) => {
    console.log(todoAppList)
    e.preventDefault()
    dispatch(addTask(todos))
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return setInputValue('')
    if (!inputValue) return
    if (editIndex === undefined) {
      setTodos([...todos, { text: inputValue, color: '#87CEEB' }])
    } else {
      const newtodos = [...todos]
      newtodos[editIndex].text = inputValue
      setTodos(newtodos)
      setEditIndex(undefined)
    }

    setInputValue('')
  }

  const handleDelete = (index) => {
    const newtodos = [...todos]
    newtodos.splice(index, 1)
    setTodos(newtodos)
    console.log('editIndex', editIndex, index)
    if (editIndex === index) {
      setEditIndex(undefined)
      setInputValue('')
    } else if (editIndex > index) {
      setEditIndex(editIndex - 1)
    }
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    setInputValue(todos[index].text)
  }

  const handleColorChange = (index, color) => {
    const newtodos = [...todos]
    newtodos[index].color = color
    setTodos(newtodos)
  }

  return (
    <DsaStyle>
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="minpt"
            type="text"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <br />
          <button className="ibtn" type="submit">
            Add Task
          </button>
        </form>
        <span>Total Task : {todos?.length}</span>

        <hr />
      </div>
      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>
            <div
              className="map-container"
              style={{ backgroundColor: todo.color }}
            >
              <p>{todo.text}</p>
              <div className="allbtn">
                <button
                  className="btn"
                  style={{ backgroundColor: todo.color }}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn"
                  style={{ backgroundColor: todo.color }}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <select
                  className="selector"
                  value={todo.color}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                >
                  <option value="#005500">Completed</option>
                  <option value="#880808">InComplete</option>
                </select>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </DsaStyle>
  )
}
export default TodoList
