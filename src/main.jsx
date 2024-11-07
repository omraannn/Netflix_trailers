import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from '../store.js'
import React from 'react'
 
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     
     <Provider store={store}>
       <App />
     </Provider>
     
  </React.StrictMode>,
)