import { useSelector, useDispatch } from 'react-redux'
import increment from './actions/increment'
import Alter from './components/Alter'

function App() {
  const disPatch = useDispatch()
  const state = useSelector((state) => state.cart)
  return (
    <div className='App'>
      <h3>Hello {state}</h3>
      <button
        onClick={() => {
          disPatch(increment())
        }}
      >
        +
      </button>
      <Alter />
    </div>
  )
}

export default App
