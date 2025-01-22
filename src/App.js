import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Pages/Product.jsx';
function App() {
  return (
    <>
       {/* <Product/> */}
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/product' element={<Product/>}></Route>
            </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
