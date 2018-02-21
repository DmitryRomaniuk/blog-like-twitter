import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from '../shared/containers/App'
import { APP_CONTAINER_CLASS } from '../shared/config'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById(APP_CONTAINER_CLASS),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../shared/containers/App', () => {
    render(App)
  })
}