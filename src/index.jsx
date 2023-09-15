import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../css/main.css'
// import Modal from './components/Modal'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* openModal={openModal} closeModal={closeModal} */}
    {/* <Modal closeModal={closeModal} /> */}
  </React.StrictMode>,
)
// ReactDOM.render(<App/>, document.getElementById('root'))

// let modalOpen = document.querySelector("dialog").style.display = "none" ? false : true


// function openModal(){
//   document.querySelector("dialog").style.display = "grid"
// }

// function closeModal(){
//   document.querySelector("dialog").style.display = "none"
// }


