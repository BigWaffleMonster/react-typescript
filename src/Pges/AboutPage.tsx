import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Информация</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus, esse et illo officia sequi. Corporis, eius exercitationem, facilis illum ipsum iste itaque iure libero maxime natus nemo rerum voluptatum.</p>
      <button className="btn" onClick={() => history.push('/')}>Обратно к списку</button>
    </>
  )
}