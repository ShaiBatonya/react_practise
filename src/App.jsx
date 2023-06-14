// importing necessary things from react router dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

// import the components that act like pages
import HomePage from "./pages/HomePage";

import NotFoundPage from "./pages/NotFoundPage";

import AddProduct from './pages/products/AddProduct';
import Products from './pages/products/Products';
import ProductPage from "./pages/products/ProductPage";
import Navbar from "./components/Navbar";


// router settings
const router = createBrowserRouter(
  createRoutesFromElements(
    // the routes
    <Route>
      {/* main route */}
      <Route index element={<HomePage />} />

      <Route path="products">
        {/* main route of products */}
        <Route index element={<Products/>}/>
        <Route path="add-product" element={<AddProduct/>}/>
        <Route path="by-id/:id" element={<ProductPage/>} />
      </Route>

      {/* not found page route */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Navbar/>
    <RouterProvider router={router} />

    </>
  );
}

export default App;
