# impress-react-component
Impress.js simple components for React

You can use the component easily,
fist thing to do is to install the package:
```shell
npm install impress-react-component
```

Then import and work with it on your react application, for example:
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Presentation, Slide } from 'impress-react-component'

class App extends React.Component {
  render () {
    return (
      <Presentation>
        <Slide y={500} z={100}>
          <h1>Hello</h1>
        </Slide>
        <Slide rotate={90}>
          <h1>Impress</h1>
        </Slide>
      </Presentation>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementsByClassName('app-react')[0]
)
```