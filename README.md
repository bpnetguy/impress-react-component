# impress-react-component
**Impress.js simple components for React**

You can use the component easily,
first thing to do is to install the package:
```shell
npm install impress-react-component
```

Then import and work with it in your react application, for example:
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

ReactDOM.render(<App />, document.body)
```

Here's a list of components you can use:
###Presentation
The main component which includes all other impress components, you need this to define a new presentation

_Presentation_ props:
+ **style**
⋅⋅⋅styling the main div which includes all presentation components

###Slide
Defines a slide of your presentation

_Slide_ props:
+ **style**
⋅⋅⋅styling the main div of slide
+ **x**
⋅⋅⋅Slide's position-x
+ **y**
⋅⋅⋅Slide's position-y
+ **z**
⋅⋅⋅Slide's position-z