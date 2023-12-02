import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  
  return (
    <header>
      <h1 className="text-center">{props.course}</h1>
    </header>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <p className='text-center'>
        <strong>{part1}</strong> {exercises1}
      </p>
      <p className='text-center'>
      <strong>{part2}</strong> {exercises2}
      </p>
      <p className='text-center'>
      <strong>{part3}</strong> {exercises3}
      </p>
    </>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <>
      <p className='text-center'><strong>Number of exercises:</strong> {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))