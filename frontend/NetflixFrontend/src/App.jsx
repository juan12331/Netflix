import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>
  )
}

export default App
