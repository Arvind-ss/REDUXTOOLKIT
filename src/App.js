import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './Component/Product';
<<<<<<< HEAD
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Cart from './Component/Cart';
import RootLayout from './Component/RootLayout';
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))  
  return (
    <div className="App">
      <RouterProvider router={router}/>
     {/* <Product/> */}
=======
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route></Route>
    </Route>
  ))
  return (
    <div className="App">
     <Product/>
>>>>>>> 9003663120ce3ad6d862ed20e9cf34ddeef5666a
    </div>
  );
}

export default App;