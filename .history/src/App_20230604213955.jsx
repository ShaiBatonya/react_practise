// importing necessary things from react router dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

// import the components that act like pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Products from './pages/products/Products';
import AddProduct from './pages/products/AddProduct';
import EditProduct from './pages/products/EditProduct';



// router settings
const router = createBrowserRouter(
  createRoutesFromElements(
    // the routes
    <Route>
      {/* main route */}
      <Route index element={<HomePage />} />

      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />

      <Route path="products">
        {/* main route of products */}
        <Route index element={<Products/>}/>
        <Route path="add-product" element={<AddProduct/>}/>
        <Route path="edit-product" element={<EditProduct/>}/>
        <Route path="by-id/:id" />
      </Route>

      {/* not found page route */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
    <h1>nav</h1>
    <RouterProvider router={router} />
    <h1>footer</h1>
    </>
  );
}

export default App;
