import './App.css'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
// import Footer from './pages/Footer/Footer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
