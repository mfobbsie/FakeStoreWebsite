import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import AddProductPage from "./components/AddProductPage";
import EditProduct from "./EditProduct";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/AddProductPage" element={<AddProductPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/productsdetails/:id" element={<ProductDetails />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
