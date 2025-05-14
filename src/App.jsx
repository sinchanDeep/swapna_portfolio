import Home from "./components/Home";
import ImageDisplayer from "./components/ImageDisplayer";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes , Route} from "react-router-dom"

function App() {
  
  return (
    <>
    {/*<Navbar />*/}
    <BrowserRouter>
      <Routes>
         <Route path="/" element={  <Home/>} />
       
        <Route path="/display" element={<ImageDisplayer />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
