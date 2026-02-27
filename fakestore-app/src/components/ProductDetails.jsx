import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addedMessage, setAddedMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = existingCart.find((item) => item.id === product.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setAddedMessage("Added to cart");
    setTimeout(() => setAddedMessage(""), 1500);
  };

  const handleDeleteProduct = async () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );
    if (!shouldDelete) return;

    try {
      setIsDeleting(true);
      await axios.delete(`https://fakestoreapi.com/products/${id}`);

      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = existingCart.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      navigate("/products", {
        state: { deletedMessage: "Product deleted successfully." },
      });
    } catch (deleteError) {
      console.error("Error deleting product:", deleteError);
      setError("Unable to delete product. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setCategory(response.data.category);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Unable to load product details. Please try again.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-4">
        <p>{error}</p>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="text-center mt-4">
        <p>Product not found.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "300px" }}
      />
      <p>Category: {category}</p>
      <Button onClick={handleAddToCart} variant="primary">
        Add to Cart
      </Button>
      <Button
        onClick={handleDeleteProduct}
        variant="danger"
        className="ms-2"
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete Product"}
      </Button>
      {addedMessage && <p className="mt-2">{addedMessage}</p>}
    </Container>
  );
}

export default ProductDetails;
