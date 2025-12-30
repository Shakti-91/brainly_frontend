
import './App.css'
import Button from './components/Button'
import { PlusIcon, ShareIcon } from './assets/Icons'
import { Sidebar } from './components/sidebar'
import { Card } from './components/card'
import { HomePage } from './components/homepage'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
