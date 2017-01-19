import React from 'react'
import ReactDOM from 'react-dom'
import {Box} from '../../src/index.js'

class App extends React.Component {
  render () {
    return (
      <Box>
        <h1>Hello</h1>
      </Box>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementsByClassName('app-react')[0]
)
