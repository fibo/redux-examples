import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import d3 from 'd3'

import particlesApp from './reducers'

let store = createStore(particlesApp)

ReactDOM.render(
  <Provider store={store}>
    <div>hello</div>
  </Provider>,
  document.querySelectorAll('.main')[0]
)
