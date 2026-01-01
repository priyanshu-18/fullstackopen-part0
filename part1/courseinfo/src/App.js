import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part, exercises }) => <p>{part} {exercises}</p>

const Content = ({ parts }) => (
  <div>
    {parts.map(p => <Part key={p.id} part={p.name} exercises={p.exercises} />)}
  </div>
)

const Total = ({ parts }) => (
  <p>
    Number of exercises {parts.reduce((sum, p) => sum + p.exercises, 0)}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { id: 1, name: 'Fundamentals of React', exercises: 10 },
    { id: 2, name: 'Using props to pass data', exercises: 7 },
    { id: 3, name: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
