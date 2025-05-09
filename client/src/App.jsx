import Router from './router/router'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <Navbar/>
      <Toaster toastOptions={{
    success: {
      iconTheme: {
        primary: 'rgb(70, 176, 144)',
        secondary: 'white',
      },
    },
  }}/>
      <Router/>
    </>
  )
}

export default App
