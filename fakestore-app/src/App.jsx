import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductListing" element={<ProductListing />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
