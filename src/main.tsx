import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './app/store'
import { StyledDefaultStyles as Styled } from './modules/common/assets/styles/DefaultStyles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Styled.DefaultStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
