import React from 'react'
import Body from './components/Body'
import SliderLocal from './components/SliderLocal'
import Cabecera from './components/Cabecera'
import Detail from './components/Detail'
import { BrowserRouter, Routes, Route} from "react-router-dom";



const App = () => {
  return (
    <div className='container'>

        <BrowserRouter>
        <Cabecera/>
            <Routes>
                <Route exact path="/" element={<Body />} />
                <Route path="/slider" element={<SliderLocal />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App