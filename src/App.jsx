import { useContext, useState } from 'react'
import './App.css'
import Routes from './Routes/Routes'
import { UserContext } from './context/UserContext'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'

const initialUserObj = {
  id: '',
  name: '',
  isLoggedIn: false
}

function App() {
  const { user, setUser } = useContext(UserContext)
  // const navigate = useNavigate()
  const [userObj, setUserObj] = useState(initialUserObj)
  const [error, setError] = useState('')

  console.log(user)

  const onChangeHandler = (e) => {
    if (userObj.name.length == 0) setError("Name Required")
    setError('')
    setUserObj((pre) => {
      return {
        ...pre,
        name: e.target.value
      }
    })
  }
  const loginHandler = () => {

    if (!userObj.name) return setError('Name Required')

    setUser({
      id: 'ldjfowurw40skdf09w40923jkdjf',
      name: userObj.name,
      isLoggedIn: true
    })
    setUserObj({
      id: '',
      name: ' ',
      isLoggedIn: false
    })
    // navigate('/')
  }

  const logoutHandler = () => {

    setUser({
      id: '',
      name: '',
      isLoggedIn: false
    })
    setError('')
    // navigate('/')
  }

  return (
    <div className="App">
      <Navbar />
      <input type="text" value={userObj.name}
        onFocus={() => {
          if (userObj.name.length == 3) {
            setError('Complete Name')
            console.log('onBlur')
          }
        }}
        onBlur={() => {
          if (userObj.name.length == 3) {
            setError('Complete Name')
            console.log('onBlur')
          }

        }} placeholder='name' onChange={onChangeHandler} />
      {
        !user.isLoggedIn ? (
          <>
            <button onClick={loginHandler} > Log in </button>
            {/* error message */}
            {
              error ? <span> {error}</span> : ''
              // !userObj.name ? <span> Required </span> : ''
            }
          </>
        ) : (
          <button onClick={logoutHandler} > Log out </button>
        )
      }

      <Routes />

    </div >
  )
}

export default App