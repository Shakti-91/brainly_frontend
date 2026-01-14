
import './App.css'
import { HomePage } from './components/homepage'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Shareduser } from './components/sharedUser'
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/share/:sharelink' element={<Shareduser/>}/>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
