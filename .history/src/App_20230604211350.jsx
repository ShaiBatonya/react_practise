import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<HomePage />} />
      <Route path="contact" element={<HomePage />} />
    </Route>
  )
);

function App() {
  return <></>;
}

export default App;
