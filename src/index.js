import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}!</p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>greeting app created by <a href="https://github.com/mluukkai">mluukkai</a></div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Anniina"/>
      <Footer />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
