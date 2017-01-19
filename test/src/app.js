import React from 'react'
import ReactDOM from 'react-dom'
import { Presentation, Slide } from '../../src/index.js'

class App extends React.Component {
  render () {
    return (
      <Presentation>
        <Slide y={500} z={1000}>
          <h1>Hello</h1>
        </Slide>
        <Slide rotate={90} rotateX={45}>
          <h1>Bye</h1>
        </Slide>
      </Presentation>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementsByClassName('app-react')[0]
)
