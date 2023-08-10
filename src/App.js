import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './Component/Product';
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
    </div>
  );
}

export default App;
