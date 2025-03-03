import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import SignUp from '../components/SignUp'
// import { Provider } from 'react-redux'
// import SignupForm from '../components/SignUpForm'
import RegistrationForm from '../components/RegistrationForm'
import FetchUsers from '../components/FetchUsers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignupForm/> */}
      <FetchUsers/>
    </>
  )
}

export default App
