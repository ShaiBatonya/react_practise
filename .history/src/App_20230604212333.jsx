import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route

} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
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
