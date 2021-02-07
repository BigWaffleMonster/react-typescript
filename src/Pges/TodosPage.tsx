import React, {useEffect, useState} from 'react'
import {TodoForm} from '../components/TodoForm'
import {TodoList} from '../components/TodoList'
import {ITodo} from '../interfaces'

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]

    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prevState => [newTodo, ...prevState])
  }

  const toggleHandler = (id: number) => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены, что хотите удалить элемент')
    if (shouldRemove) {
      setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }
  }

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler}/>

      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
    </React.Fragment>
  )
}